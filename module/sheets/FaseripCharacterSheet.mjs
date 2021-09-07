export default class FaseripCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/faserip/templates/actor/character-sheet.hbs",
            classes: ["faserip", "sheet", "character"]
        })
    }

    get template(){
        return `systems/faserip/templates/actor/character-sheet.hbs`;
    }

    getData(){
        const data = super.getData();
        data.config = CONFIG.FASERIP;
        data.weapon = data.items.filter(function (item) {return item.type == "weapon" });
        return data;
    }
}