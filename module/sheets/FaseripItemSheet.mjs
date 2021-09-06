export default class FaseripItemSheet extends ItemSheet {
    get template() {
        return `systems/faserip/templates/item/weapon-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.FASERIP;
    
        return data;
    }
}