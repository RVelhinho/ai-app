export const recipes = [
    {
        name: "Ricardo Daniel",
        recipes: [
            { name: "Veggie Croquettes", favorite: false },
            { name: "Tuna with Rice", favorite: false },
            { name: "Spaghetti and Meatballs", favorite: false },
        ],
    },
    {
        name: "Joe Exotic",
        recipes: [
            { name: "Fried chicken with rice", favorite: false },
            { name: "Rib-eye steak with red wine", favorite: false },
            { name: "Beef with mushrooms", favorite: false },
        ],
    },
    {
        name: "Bruno Barata",
        recipes: [
            { name: "Panados do Social", favorite: false },
            { name: "Licas", favorite: false },
            { name: "Uber Eats", favorite: false },
        ],
    },
];

export function getRecipes() {
    return recipes;
}
