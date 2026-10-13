interface AIMessageRendererProps {
    content: string;
}

export default function AIMessageRenderer({ content }: AIMessageRendererProps) {
    const renderFormattedText = (text: string) => {
        if (!text) return '';

        let formatted = text
            // Escape HTML basic
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")

            // Bold **text**
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

            // Numbered list: 1. text → <ol><li>
            .replace(/(\d+)\.\s+\*\*(.*?)\*\*:/g, "<li><strong>$2</strong>:")

            // Newline → <br>
            .replace(/\n/g, "<br>");

        return formatted;
    };

    return (
        <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: renderFormattedText(content) }}
        />
    );
}