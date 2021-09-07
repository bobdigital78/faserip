export default class FaseripItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["faserip", "sheet", "item"]
        })
    }
    get template() {
        return `systems/faserip/templates/item/weapon-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        

        data.config = CONFIG.FASERIP;
    
        return data;
    }
    
}