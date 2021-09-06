import { FASERIP } from "./module/config.mjs";
import FaseripItemSheet from "./module/sheets/FaseripItemSheet.mjs";

Hooks.once('init', function() {

   

    CONFIG.FASERIP = FASERIP;

    CONFIG.Combat.initiative = {
        formula: "1d10 + @attributes.intuition.mod"
    };



    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faserip", FaseripItemSheet, { makeDefault: true });

    return preloadHandlebarsTemplate();
});