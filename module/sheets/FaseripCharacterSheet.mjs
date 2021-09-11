export default class FaseripCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          classes: ["faserip", "sheet", "actor", "character"],
          template: "systems/faserip/templates/actor/character-sheet.hbs",
          width: 720,
          height: 680,
          tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes"}]
        });
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