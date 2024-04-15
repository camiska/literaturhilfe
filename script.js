document.getElementById('analyzeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputArea = document.getElementById('outputText');
    const keywords = ["ethics", "ethic", "ethical", "moral", "morally", "ethically", "ethik", "ethisch", "moral", "moralisch", "dilemma"];
    const regex = new RegExp(keywords.join('|'), 'i'); // Case insensitive search
    const lines = inputText.split('\n');
    const results = lines.filter(line => regex.test(line));

    outputArea.value = results.join('\n\n');
});
