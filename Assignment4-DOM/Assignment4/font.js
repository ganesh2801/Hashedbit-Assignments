document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const colorBox = document.getElementById('colorbox');
    const colorChangeButton = document.getElementById('colorchange');
    const fontSizeInput = document.getElementById('fontsize');
    const italicButton = document.getElementById('italic');
    const underlineButton = document.getElementById('underline');
    const boldButton = document.getElementById('bold');
    const fontList = document.getElementById('list');
    const getStyleButton = document.getElementById('getstyle');
    const cssPropsParagraph = document.getElementById('css-props');
    colorChangeButton.addEventListener('click', function() {
        const color = colorBox.value;
        textContainer.style.color = color;
    });
    fontSizeInput.addEventListener('input', function() {
        const fontSize = fontSizeInput.value + 'px';
        textContainer.style.fontSize = fontSize;
    });
    italicButton.addEventListener('click', function() {
        textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
    });
    underlineButton.addEventListener('click', function() {
        textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
    });
    boldButton.addEventListener('click', function() {
        textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });
    fontList.addEventListener('change', function() {
        const fontFamily = fontList.value;
        textContainer.style.fontFamily = fontFamily;
    });
    getStyleButton.addEventListener('click', function() {
        const cssProps = {
            'color': textContainer.style.color,
            'font-size': textContainer.style.fontSize,
            'font-style': textContainer.style.fontStyle,
            'font-weight': textContainer.style.fontWeight,
            'font-family': textContainer.style.fontFamily
        };
        let cssString = '';
        for (const prop in cssProps) {
            if (cssProps[prop]) {
                cssString += `${prop}: ${cssProps[prop]}; `;
            }
        }
        cssPropsParagraph.textContent = cssString;
    });
});
