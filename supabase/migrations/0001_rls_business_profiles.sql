-- ============================================================
-- Migrasi Supabase: RLS business_profiles + trigger profil baru
-- Jalankan di Supabase SQL Editor (Project > SQL Editor).
-- Prasyarat: schema public.business_profiles + enum sudah dibuat,
-- serta fungsi update_updated_at_column() + trigger set_updated_at
-- sudah ada (sesuai spesifikasi schema).
-- Sifat: idempotent (aman dijalankan ulang). Tidak menghapus data.
-- ============================================================

-- 1. Aktifkan Row Level Security ---------------------------------
alter table public.business_profiles enable row level security;

-- 2. Policies: user hanya boleh mengakses baris miliknya sendiri
--    (auth.uid() == business_profiles.user_id)
drop policy if exists "business_profiles_select_own" on public.business_profiles;
create policy "business_profiles_select_own"
  on public.business_profiles
  for select
  using (auth.uid() = user_id);

drop policy if exists "business_profiles_insert_own" on public.business_profiles;
create policy "business_profiles_insert_own"
  on public.business_profiles
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "business_profiles_update_own" on public.business_profiles;
create policy "business_profiles_update_own"
  on public.business_profiles
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "business_profiles_delete_own" on public.business_profiles;
create policy "business_profiles_delete_own"
  on public.business_profiles
  for delete
  using (auth.uid() = user_id);

-- 3. Grants untuk role authenticated (dipakai lewat publishable key)
grant select, insert, update, delete on public.business_profiles to authenticated;
grant usage, select on sequence public.business_profiles_id_seq to authenticated;

-- 4. Otomatis buat baris business_profiles saat user baru mendaftar
--    (meniru perilaku endpoint register lama). Berjalan sebagai
--    SECURITY DEFINER agar tidak diblokir RLS.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.business_profiles (user_id)
  values (new.id)
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
