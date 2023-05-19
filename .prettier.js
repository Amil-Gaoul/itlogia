module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    printWidth: 160,
    endOfLine: 'crlf',
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT'
    ],
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 160
            }
        }
    ]
};
