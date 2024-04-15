function analyzeText() {
    const inputText = document.getElementById('inputText').value;
    const outputArea = document.getElementById('outputText');
    const keywords = ["ethics", "ethic", "ethical", "moral", "morally", "ethically", "ethik", "ethisch", "moralisch", "dilemma"];
    const lines = inputText.split('\n');
    const results = [];

    lines.forEach(line => {
        const lineLower = line.toLowerCase();
        if (keywords.some(keyword => lineLower.includes(keyword))) {
            results.push(line);
        }
    });

    outputArea.value = results.join('\n\n');
}
