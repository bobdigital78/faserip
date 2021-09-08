import { FASERIP } from "./module/config.mjs";
import FaseripItemSheet from "./module/sheets/FaseripItemSheet.mjs";
import FaseripCharacterSheet from "./module/sheets/FaseripCharacterSheet.mjs"
import { preloadHandlebarsTemplates } from "./module/helpers/templates.mjs";




Hooks.once('init', function() {

    CONFIG.FASERIP = FASERIP;

    CONFIG.Combat.initiative = {
        formula: "1d10 + @attributes.intuition.mod"
    };

  

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faserip", FaseripItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("faserip", FaseripCharacterSheet, { makeDefault: true });
    
      // Preload Handlebars templates.
  return preloadHandlebarsTemplates();

});