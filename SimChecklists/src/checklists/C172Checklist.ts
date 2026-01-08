import type { ChecklistData } from "../components/types";

const C172Checklist: ChecklistData = {
      "PREFLIGHT": {
        "color": "bg-green-500",
        "content": [
          {
            "id": "0",
            "description": "COCKPIT SAFETY CHECK",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Magnetos",
            "expected": "OFF, KEY OUT",
            "highlight": true
          },
          {
            "id": "2",
            "action": "Mixture",
            "expected": "CUTOFF",
            "highlight": true
          },
          {
            "id": "3",
            "action": "Throttle",
            "expected": "CLOSED",
            "highlight": true
          },
          {
            "id": "4",
            "description": " ",
            "highlight": false
          },
          {
            "id": "5",
            "action": "Hobbs & Tach",
            "expected": "RECORD"
          },
          {
            "id": "6",
            "action": "Documents (ARROW)",
            "expected": "ON-BOARD"
          },
          {
            "id": "7",
            "action": "Flight control lock",
            "expected": "REMOVE"
          },
          {
            "id": "8",
            "action": "Parking brake",
            "expected": "AS REQUIRED"
          },
          {
            "id": "9",
            "action": "Avionics Master",
            "expected": "OFF"
          },
          {
            "id": "10",
            "action": "Electrical switches",
            "expected": "OFF"
          },
          {
            "id": "11",
            "action": "Beacon",
            "expected": "ON"
          },
          {
            "id": "12",
            "action": "Master switch",
            "expected": "ON (PROP CLEAR)"
          },
          {
            "id": "13",
            "action": "Fuel gauges",
            "expected": "CHECK"
          },
          {
            "id": "14",
            "action": "Low fuel annunciators",
            "expected": "ABSENT"
          },
          {
            "id": "15",
            "action": "Annunciator panel",
            "expected": "TEST"
          },
          {
            "id": "16",
            "action": "Avionics",
            "expected": "ON, CHECK FAN, OFF"
          },
          {
            "id": "17",
            "action": "Pitot heat",
            "expected": "ON, CHECK, OFF (ONLY IF REQUIRED)"
          },
          {
            "id": "18",
            "action": "Required exterior lights",
            "expected": "ON, CHECK, OFF"
          },
          {
            "id": "19",
            "action": "Flaps",
            "expected": "EXTEND"
          },
          {
            "id": "20",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "21",
            "action": "Altimeter",
            "expected": "FIELD ELEVATION"
          },
          {
            "id": "22",
            "action": "Magnetic compass deviation card",
            "expected": "CHECK"
          },
          {
            "id": "23",
            "action": "Fuel selector",
            "expected": "BOTH"
          },
          {
            "id": "24",
            "action": "Alternate static",
            "expected": "CHECK THEN OFF"
          },
          {
            "id": "25",
            "action": "Fire extinguisher",
            "expected": "CHECK"
          },
          {
            "id": "26",
            "action": "Windows",
            "expected": "CHECK"
          }
        ]
      },
      "EMPENNAGE": {
        "color": "bg-green-500",
        "content": [
          {
            "id": "0",
            "description": "EMPENNAGE",
            "highlight": true
          },
          {
            "id": "1",
            "action": "General condition",
            "expected": "CHECK"
          },
          {
            "id": "2",
            "action": "Baggage area",
            "expected": "SECURE"
          },
          {
            "id": "3",
            "action": "Baggage door",
            "expected": "UN-LOCKED, LATCHED"
          },
          {
            "id": "4",
            "action": "Autopilot static port",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Tail tie down and lock",
            "expected": "REMOVE"
          },
          {
            "id": "6",
            "action": "Elevator counterweights",
            "expected": "CHECK CLEAR"
          },
          {
            "id": "7",
            "action": "Trim tab",
            "expected": "CHECK CLEAR"
          },
          {
            "id": "8",
            "action": "Rudder",
            "expected": "CHECK CLEAR"
          },
          {
            "id": "9",
            "action": "Antennas",
            "expected": "CHECK"
          }
        ]
      },
      "RIGHT WING": {
        "color": "bg-green-500",
        "content": [
          {
            "id": "0",
            "description": "RIGHT WING",
            "highlight": true
          },
          {
            "id": "1",
            "action": "General condition",
            "expected": "CHECK CLEAR"
          },
          {
            "id": "2",
            "action": "Flap",
            "expected": "CHECK"
          },
          {
            "id": "3",
            "action": "Aileron counterweights",
            "expected": "CHECK"
          },
          {
            "id": "4",
            "action": "Wingtip",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Tie down / chock",
            "expected": "REMOVE"
          },
          {
            "id": "6",
            "action": "Main gear / brake",
            "expected": "CHECK"
          },
          {
            "id": "7",
            "action": "Fuel tank sumps",
            "expected": "5 – DRAIN, NO DRIPS"
          },
          {
            "id": "8",
            "action": "Fuel tank quantity",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Fuel cap / vent",
            "expected": "CHECK"
          },
          {
            "id": "10",
            "action": "Fresh air inlet",
            "expected": "CHECK"
          }
        ]
      },
      "NOSE": {
        "color": "bg-green-500",
        "content": [
          {
            "id": "0",
            "description": "NOSE",
            "highlight": true
          },
          {
            "id": "1",
            "action": "General condition / leaks",
            "expected": "CHECK"
          },
          {
            "id": "2",
            "action": "Fuel drain",
            "expected": "3 – DRAIN, NO DRIPS"
          },
          {
            "id": "3",
            "action": "Oil",
            "expected": "6 QTS – CHECK"
          },
          {
            "id": "4",
            "action": "Propeller / spinner",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Alternator belt",
            "expected": "CHECK"
          },
          {
            "id": "6",
            "action": "Air inlets",
            "expected": "CHECK"
          },
          {
            "id": "7",
            "action": "Air filter",
            "expected": "CHECK"
          },
          {
            "id": "8",
            "action": "Nose gear",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Chock / tow bar",
            "expected": "REMOVE"
          },
          {
            "id": "10",
            "action": "Static port",
            "expected": "CHECK"
          }
        ]
      },
      "LEFT WING": {
        "color": "bg-green-500",
        "content": [
          {
            "id": "0",
            "description": "LEFT WING",
            "highlight": true
          },
          {
            "id": "1",
            "action": "General condition",
            "expected": "CHECK CLEAR"
          },
          {
            "id": "2",
            "action": "Fresh air inlet",
            "expected": "CHECK"
          },
          {
            "id": "3",
            "action": "Stall horn",
            "expected": "CHECK"
          },
          {
            "id": "4",
            "action": "Pitot",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Tie down / chock",
            "expected": "REMOVE"
          },
          {
            "id": "6",
            "action": "Fuel tank sumps",
            "expected": "5 – DRAIN, NO DRIPS"
          },
          {
            "id": "7",
            "action": "Fuel tank vent",
            "expected": "CHECK"
          },
          {
            "id": "8",
            "action": "Fuel tank quantity",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Fuel cap / vent",
            "expected": "CHECK"
          },
          {
            "id": "10",
            "action": "Wingtip",
            "expected": "CHECK"
          },
          {
            "id": "11",
            "action": "Aileron counterweights",
            "expected": "CHECK"
          },
          {
            "id": "12",
            "action": "Flap",
            "expected": "CHECK"
          },
          {
            "id": "13",
            "action": "Main gear / brakes",
            "expected": "CHECK"
          }
        ]
      },
      "BEFORE ENGINE START": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "description": "IN COCKPIT",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Passenger briefing",
            "expected": "COMPLETE"
          },
          {
            "id": "2",
            "action": "Seats / seat belts",
            "expected": "SECURE"
          },
          {
            "id": "3",
            "action": "Doors",
            "expected": "CLOSED, LOCKED"
          },
          {
            "id": "4",
            "action": "Circuit breakers",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Electrical switches",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Avionics",
            "expected": "OFF"
          },
          {
            "id": "7",
            "action": "Fuel selector",
            "expected": "BOTH"
          },
          {
            "id": "8",
            "action": "Fuel shutoff",
            "expected": "IN (ON)"
          },
          {
            "id": "9",
            "action": "Brakes",
            "expected": "HOLD"
          },
          {
            "id": "10",
            "action": "Mixture",
            "expected": "CUTOFF"
          },
          {
            "id": "11",
            "action": "Throttle",
            "expected": "OPEN"
          },
          {
            "id": "12",
            "action": "Master switch",
            "expected": "ON (PROP CLEAR)"
          }
        ]
      },
      "ENGINE START": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "description": "ENGINE START",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Fuel pump",
            "expected": "ON"
          },
          {
            "id": "2",
            "action": "Prime (cold)",
            "expected": "3–5 SECS"
          },
          {
            "id": "3",
            "action": "Prime (warm)",
            "expected": "2 SECS"
          },
          {
            "id": "4",
            "action": "Prime (hot)",
            "expected": "0 SECS"
          },
          {
            "id": "5",
            "action": "Fuel pump",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Propeller area",
            "expected": "CLEAR"
          },
          {
            "id": "7",
            "action": "Starter",
            "expected": "ENGAGE"
          },
          {
            "id": "8",
            "action": "Mixture",
            "expected": "RICH"
          },
          {
            "id": "9",
            "action": "Throttle",
            "expected": "800 RPM (NO HIGHER THAN 1000)"
          },
          {
            "id": "10",
            "action": "Oil pressure",
            "expected": "CHECK"
          },
          {
            "id": "11",
            "action": "Mixture",
            "expected": "LEAN"
          },
          {
            "id": "12",
            "action": "Flaps",
            "expected": "RETRACT"
          },
          {
            "id": "13",
            "action": "Avionics",
            "expected": "ON"
          },
          {
            "id": "14",
            "action": "Transponder",
            "expected": "1200 VFR, ALT"
          },
          {
            "id": "15",
            "action": "Radios",
            "expected": "SET"
          },
          {
            "id": "16",
            "action": "ATIS",
            "expected": "CHECK"
          },
          {
            "id": "17",
            "action": "Flight instruments",
            "expected": "SET"
          },
          {
            "id": "18",
            "action": "Lights",
            "expected": "AS APPROPRIATE"
          },
          {
            "id": "19",
            "action": "Navigation / transponder",
            "expected": "SET"
          },
          {
            "id": "20",
            "action": "Radio",
            "expected": "CLEARANCE / GROUND / CTAF"
          },
          {
            "id": "21",
            "action": "2nd radio",
            "expected": "MONITOR 121.5"
          }
        ]
      },
      "TAXI": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "description": "TAXI",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Parking brake",
            "expected": "RELEASED"
          },
          {
            "id": "2",
            "action": "Brakes",
            "expected": "CHECK"
          },
          {
            "id": "3",
            "action": "Flight instruments",
            "expected": "CHECK (TURNS / INDICATIONS)"
          }
        ]
      },
      "ENGINE RUNUP": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "description": "ENGINE RUNUP",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Brakes",
            "expected": "SET / HOLD"
          },
          {
            "id": "2",
            "action": "Fuel selector",
            "expected": "BOTH"
          },
          {
            "id": "3",
            "action": "Mixture (below 3000 ft)",
            "expected": "RICH"
          },
          {
            "id": "4",
            "action": "Oil temp",
            "expected": "IN THE GREEN"
          },
          {
            "id": "5",
            "action": "Throttle",
            "expected": "1800 RPM"
          },
          {
            "id": "6",
            "action": "Magnetos",
            "expected": "DROP ≤ 150, DIFF ≤ 50"
          },
          {
            "id": "7",
            "action": "Vacuum",
            "expected": "4.5–5.5"
          },
          {
            "id": "8",
            "action": "Engine instruments",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Ammeter",
            "expected": "CHECK"
          },
          {
            "id": "10",
            "action": "Annunciators",
            "expected": "ABSENT"
          },
          {
            "id": "11",
            "action": "Throttle",
            "expected": "IDLE, THEN 1000 RPM"
          },
          {
            "id": "12",
            "action": "Pitot heat",
            "expected": "AS REQUIRED"
          },
          {
            "id": "13",
            "action": "Flight instruments",
            "expected": "CHECK"
          },
          {
            "id": "14",
            "action": "Electric trim",
            "expected": "CHECK"
          },
          {
            "id": "15",
            "action": "Autopilot",
            "expected": "OFF"
          },
          {
            "id": "16",
            "action": "Flight controls",
            "expected": "CHECK (FULL, FREE, CORRECT)"
          },
          {
            "id": "17",
            "action": "Trim",
            "expected": "TAKEOFF"
          }
        ]
      },
      "BEFORE TAKEOFF": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "description": "BEFORE TAKEOFF",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Flaps (normal)",
            "expected": "0–10°"
          },
          {
            "id": "2",
            "action": "Flaps (short/soft)",
            "expected": "10°"
          },
          {
            "id": "3",
            "action": "Seats / seat belts",
            "expected": "SECURE, UPRIGHT"
          },
          {
            "id": "4",
            "action": "Doors / windows",
            "expected": "SECURE"
          },
          {
            "id": "5",
            "action": "Takeoff briefing",
            "expected": "COMPLETE"
          },
          {
            "id": "6",
            "action": "Radio",
            "expected": "TOWER / CTAF"
          },
          {
            "id": "7",
            "action": "2nd radio",
            "expected": "MONITOR 121.5"
          },
          {
            "id": "8",
            "action": "Lights",
            "expected": "WHEN CLEARED FOR TAKEOFF, AS APPROPRIATE"
          }
        ]
      },
      "TAKEOFF": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "description": "TAKEOFF",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Mixture (below 3000 ft)",
            "expected": "RICH"
          },
          {
            "id": "2",
            "action": "Throttle",
            "expected": "FULL"
          },
          {
            "id": "3",
            "action": "Power (static)",
            "expected": "2300–2400 RPM – CHECK"
          },
          {
            "id": "4",
            "action": "Engine gauges",
            "expected": "CHECK"
          },
          {
            "id": "5",
            "action": "Airspeed",
            "expected": "CHECK"
          },
          {
            "id": "6",
            "action": "Rotate",
            "expected": "55 KIAS"
          },
          {
            "id": "7",
            "action": "Short field (10° flaps)",
            "expected": "LIFT-OFF 56 KIAS"
          },
          {
            "id": "8",
            "action": "Crosswind (0–10° flaps, up to 20 kts)",
            "expected": "USE AILERON INTO WIND"
          },
          {
            "id": "9",
            "action": "Flaps",
            "expected": "RETRACT SLOWLY BY 60 KIAS"
          }
        ]
      },
      "CLIMB": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "description": "CLIMB",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Cruise climb",
            "expected": "80 KIAS (≥ 500 FPM)"
          },
          {
            "id": "2",
            "action": "Power",
            "expected": "AS REQUIRED"
          },
          {
            "id": "3",
            "action": "Mixture",
            "expected": "LEAN AS REQUIRED"
          },
          {
            "id": "4",
            "action": "Fuel selector",
            "expected": "BOTH"
          }
        ]
      },
      "CRUISE": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "description": "CRUISE",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Power",
            "expected": "REDUCE SLOWLY"
          },
          {
            "id": "2",
            "action": "Mixture",
            "expected": "AS REQUIRED (LEAN)"
          }
        ]
      },
      "DESCENT": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "description": "DESCENT",
            "highlight": true
          },
          {
            "id": "1",
            "action": "ATIS",
            "expected": "OBTAIN"
          },
          {
            "id": "2",
            "action": "Altimeters",
            "expected": "SET"
          },
          {
            "id": "3",
            "action": "Seats / seat belts",
            "expected": "UPRIGHT, SECURE"
          },
          {
            "id": "4",
            "action": "Cabin power (if equipped)",
            "expected": "OFF"
          },
          {
            "id": "5",
            "action": "Fuel selector",
            "expected": "BOTH"
          }
        ]
      },
      "APPROACH / LANDING": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "description": "APPROACH / LANDING",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Downwind",
            "expected": "90 KTS"
          },
          {
            "id": "2",
            "action": "Mixture (below 3000 ft)",
            "expected": "RICH"
          },
          {
            "id": "3",
            "action": "Flaps (Vfe 110 / 85 KIAS)",
            "expected": "AS REQUIRED"
          },
          {
            "id": "4",
            "action": "Crosswind (15 kts)",
            "expected": "0–20° FLAPS"
          },
          {
            "id": "5",
            "action": "Landing (flaps 0°)",
            "expected": "65–75 KIAS"
          },
          {
            "id": "6",
            "action": "Landing (flaps 30°)",
            "expected": "60–70 KIAS"
          }
        ]
      },
      "AFTER LANDING": {
        "color": "bg-purple-500",
        "content": [
          {
            "id": "0",
            "description": "AFTER LANDING",
            "highlight": true
          },
          {
            "id": "1",
            "action": "RPM",
            "expected": "1000"
          },
          {
            "id": "2",
            "action": "Radio",
            "expected": "GROUND / CTAF"
          },
          {
            "id": "3",
            "action": "Flaps",
            "expected": "RETRACT"
          },
          {
            "id": "4",
            "action": "Pitot heat",
            "expected": "OFF"
          },
          {
            "id": "5",
            "action": "Lights",
            "expected": "AS REQUIRED"
          },
          {
            "id": "6",
            "action": "Fuel pump (if used)",
            "expected": "OFF"
          },
          {
            "id": "7",
            "action": "Mixture",
            "expected": "LEAN"
          },
          {
            "id": "8",
            "action": "Transponder",
            "expected": "1200"
          },
          {
            "id": "9",
            "action": "Call for fuel",
            "expected": "AS REQUIRED"
          }
        ]
      },
      "SHUTDOWN": {
        "color": "bg-purple-500",
        "content": [
          {
            "id": "0",
            "description": "SHUTDOWN",
            "highlight": true
          },
          {
            "id": "1",
            "action": "Avionics",
            "expected": "OFF"
          },
          {
            "id": "2",
            "action": "Throttle",
            "expected": "IDLE"
          },
          {
            "id": "3",
            "action": "Mixture",
            "expected": "CUTOFF (WHEN PROP STOPS)"
          },
          {
            "id": "4",
            "action": "Electrical switches",
            "expected": "OFF"
          },
          {
            "id": "5",
            "action": "Magnetos",
            "expected": "OFF, KEY OUT"
          },
          {
            "id": "6",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "7",
            "action": "Hobbs & Tach",
            "expected": "RECORD"
          },
          {
            "id": "8",
            "action": "Flight control lock",
            "expected": "INSTALL"
          },
          {
            "id": "9",
            "action": "Fuel selector",
            "expected": "LEFT or RIGHT"
          },
          {
            "id": "10",
            "action": "Tie downs",
            "expected": "SECURE"
          }
        ]
      }
    }

export default C172Checklist;