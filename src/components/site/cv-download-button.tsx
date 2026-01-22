"use client";

type CVDownloadButtonProps = {
  url: string;
  filename: string;
  label: string;
  className?: string;
};

export function CVDownloadButton({
  url,
  filename,
  label,
  className,
}: CVDownloadButtonProps) {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(() => {
        // Fallback to direct link if fetch fails
        window.open(url, "_blank");
      });
  };

  return (
    <a
      href={url}
      download={filename}
      onClick={handleDownload}
      className={className}
    >
      {label}
    </a>
  );
}
