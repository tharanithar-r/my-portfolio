export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ')
}

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    } catch {
      return false;
    }
  }
};

// Download resume utility
export const downloadResume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1rguV7Hl7Ggjtiy22pwiJTyBDGgbE8pPb/view?usp=drivesdk';
  window.open(resumeUrl, '_blank');
};