export const preferences = [
    {
        desc:
            "Send notifications to smartphone whenever ingredients are running low.",
        check: false,
    },
    {
        desc:
            "Display recommended recipes based on personalized diets chosen by the user.",
        check: false,
    },
    {
        desc: "Turn screen on automatically when nearby presence is sensed",
        check: false,
    },
    {
        desc: "System reacts to voice commands",
        check: false,
    },
];

export function getPreferences() {
    return preferences;
}
