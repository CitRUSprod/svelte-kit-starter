const { types } = require("./base.cjs")

function convertCommitTypes(typesObject = {}) {
    const typeNames = Object.keys(typesObject)

    const maxLength = typeNames.reduce((max, typeName) => {
        if (max < typeName.length) {
            return typeName.length
        }

        return max
    }, 0)

    const commitTypes = typeNames.reduce((acc, typeName) => {
        const spacing = " ".repeat(maxLength - typeName.length)
        acc.push({
            name: `${typeName}:${spacing} ${typesObject[typeName]}`,
            value: typeName
        })
        return acc
    }, [])

    return commitTypes
}

/** @type {import("cz-customizable").Options} */
const config = {
    types: convertCommitTypes(types),
    skipQuestions: ["scope", "body", "footer"],
    upperCaseSubject: true
}

module.exports = config
