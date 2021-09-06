// Attack results table

export default 

  {
    blunt: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "slam",
        redSuccess: "stun"
    },
    edged: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "stun",
        redSuccess: "kill"
    },
    shooting: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "bullseye",
        redSuccess: "kill"
    },
    throwingEdged: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "stun",
        redSuccess: "kill"
    },
    throwingBlunt = {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "hit",
        redSuccess: "stun"
    },
    energy: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "bullseye",
        redSuccess: "kill"
    },
    force = {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "bullseye",
        redSuccess: "stun"
    },
    grappling: {
        failure: "miss",
        greenSuccess: "miss",
        yellowSuccess: "partial",
        redSuccess: "hold"
    },
    grabbing: {
        failure: "miss",
        greenSuccess: "take",
        yellowSuccess: "grab",
        redSuccess: "break"
    },
    escaping: {
        failure: "miss",
        greenSuccess: "miss",
        yellowSuccess: "escape",
        redSuccess: "reversal"
    },
    charging: {
        failure: "miss",
        greenSuccess: "hit",
        yellowSuccess: "slam",
        redSuccess: "stun"
    },
    dodging: {
        failure: "none",
        greenSuccess: "-2 CS",
        yellowSuccess: "-4 CS",
        redSuccess: "-6 CS"
    },
    evading: {
        failure: "autohit",
        greenSuccess: "evasison",
        yellowSuccess: "+1 CS",
        redSuccess: "+2 CS"
    },
    blocking: {
        failure: "-6 CS",
        greenSuccess: "-4 CS",
        yellowSuccess: "-2 CS",
        redSuccess: "+1 CS"
    },
    catching: {
        failure: "autohit",
        greenSuccess: "miss",
        yellowSuccess: "damage",
        redSuccess: "catch"
    }
  }