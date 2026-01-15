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
            "action": "Documents (A(R)ROW)",
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
            "action": "Master switch (PROP CLEAR)",
            "expected": "ON"
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
            "action": "Pitot heat (ONLY IF REQUIRED)",
            "expected": "ON, CHECK, OFF"
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
            "action": "Magnetic compass",
            "note": "& Deviation card",

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
            "expected": "UN-LOCKED & LATCHED"
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
            "action": "Elevator & Counter Wts",
            "expected": "CHECK & CLEAR"
          },
          {
            "id": "7",
            "action": "Trim tab",
            "expected": "CHECK & CLEAR"
          },
          {
            "id": "8",
            "action": "Rudder",
            "expected": "CHECK & CLEAR"
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
            "id": "1",
            "action": "General condition",
            "expected": "CHECK & CLEAR"
          },
          {
            "id": "2",
            "action": "Flap",
            "expected": "CHECK"
          },
          {
            "id": "3",
            "action": "Aileron & Counter Wts",
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
            "action": "Main gear & brake",
            "expected": "CHECK"
          },
          {
            "id": "7",
            "action": "Fuel tank sumps (5)",
            "expected": "DRAIN & NO DRIPS"
          },
          {
            "id": "8",
            "action": "Fuel tank & Quantity",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Fuel cap & vent",
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
            "id": "1",
            "action": "General condition / leaks",
            "expected": "CHECK"
          },
          {
            "id": "2",
            "action": "Fuel drain (3)",
            "expected": "DRAIN, NO DRIPS"
          },
          {
            "id": "3",
            "action": "Oil (6 QTS)",
            "expected": "CHECK"
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
            "action": "Fuel tank sumps (5)",
            "expected": "DRAIN, NO DRIPS"
          },
          {
            "id": "7",
            "action": "Fuel tank vent",
            "expected": "CHECK"
          },
          {
            "id": "8",
            "action": "Fuel tank & Auantity",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Fuel cap & vent",
            "expected": "CHECK"
          },
          {
            "id": "10",
            "action": "Wingtip",
            "expected": "CHECK"
          },
          {
            "id": "11",
            "action": "Aileron & Counter Wts",
            "expected": "CHECK"
          },
          {
            "id": "12",
            "action": "Flap",
            "expected": "CHECK"
          },
          {
            "id": "13",
            "action": "Main gear & Brakes",
            "expected": "CHECK"
          }
        ]
      },
      "BEFORE ENGINE START": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "action": "Tail lock",
            "expected": "IN COCKPIT"
          },
          {
            "id": "1",
            "action": "Passenger briefing",
            "expected": "COMPLETE"
          },
          {
            "id": "2",
            "action": "Seats & seat belts",
            "expected": "SECURE"
          },
          {
            "id": "3",
            "action": "Doors",
            "expected": "CLOSED & LOCKED"
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
            "expected": "IN / ON"
          },
          {
            "id": "9",
            "action": "Brakes",
            "expected": "HOLD"
          },

        ]
      },
      "ENGINE START": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "0",
            "action": "Mixture",
            "expected": "CUTOFF"
          },
          {
            "id": "1",
            "action": "Throttle",
            "expected": "1/4\" OPEN"
          },
          {
            "id": "2",
            "action": "Master switch (PROP CLEAR)",
            "expected": "ON"
          },
          {
            "id": "3",
            "action": "Fuel pump",
            "expected": "ON"
          },
          {
            "id": "4",
            "action": "Prime",
            "expected": "COLD: 3–5 SECS; WARM: 2 SECS; HOT: 0 SECS"
          },
          {
            "id": "5",
            "action": "Fuel pump",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Propeller area",
            "expected": "CLEAR",
            "highlight": true
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
          
        ]
      },
      "BEFORE TAXI": {
        "color": "bg-yellow-500",
        "content": [
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
            "action": "Transponder (1200 VFR)",
            "expected": "ALT"
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
            "expected": "CHECK"
          }
        ]
      },
      "ENGINE RUNUP": {
        "color": "bg-yellow-500",
        "content": [
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
            "action": "Mixture (below 3000\')",
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
            "action": "Magnetos (DROP ≤ 150, DIFF ≤ 50)",
            "expected": "CHECK"
          },
          {
            "id": "7",
            "action": "Vacuum (4.5\"–5.5\")",
            "expected": "CHECK"
          },
          {
            "id": "8",
            "action": "Engine indicators",
            "expected": "CHECK"
          },
          {
            "id": "9",
            "action": "Ammeter",
            "expected": "CHECK"
          },
          {
            "id": "9note",
            "description": "TURN ON ONLY EQUIPMENT & LTS EXPECTED FOR FLT. EXTEND FLAPS ONLY FOR SHORT OR SOFT FIELD T/O.",
            "highlight": true
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
        ]
      },
      "BEFORE TAKEOFF": {
        "color": "bg-yellow-500",
        "content": [
          {
            "id": "-5",
            "action": "Pitot heat",
            "expected": "AS REQUIRED"
          },
          {
            "id": "-4",
            "action": "Flight instruments",
            "expected": "CHECK"
          },
          {
            "id": "-3",
            "action": "Electric trim",
            "expected": "CHECK"
          },
          {
            "id": "-2",
            "action": "Autopilot",
            "expected": "OFF"
          },
          {
            "id": "-1",
            "action": "Flight controls",
            "expected": "CHECK"
          },
          {
            "id": "0",
            "action": "Trim",
            "expected": "TAKEOFF"
          },
          {
            "id": "1",
            "action": "Flaps",
            "expected": "Normal: 0–10°; Short/soft: 10°"
          },
          {
            "id": "3",
            "action": "Seats & seat belts",
            "expected": "SECURE, UPRIGHT"
          },
          {
            "id": "4",
            "action": "Doors & windows",
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
            "expected": "AS APPROPRIATE",
            "note": "When cleared for takeoff"
          }
        ]
      },
      "TAKEOFF": {
        "color": "bg-blue-500",
        "content": [
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
            "action": "Power (2300–2400 RPM=Static)",
            "expected": "CHECK"
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
            "expected": "56 KIAS"
          },
          {
            "id": "8",
            "action": "Crosswind (up to 20 kts)",
            "expected": "0–10° flap"
          },
        ]
      },
      "CLIMB": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "0",
            "action": "Flaps",
            "expected": ">60KIAS - RETRACT SLOWLY"
          },
          {
            "id": "1",
            "action": "Cruise climb Airspeed",
            "expected": "80 KIAS / ≥ 500 FPM"
          },
        ]
      },
      "CRUISE": {
        "color": "bg-blue-500",
        "content": [
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
        ]
      },
      "DESCENT": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "-2",
            "action": "Fuel selector",
            "expected": "BOTH"
          },
          {
            "id": "-1",
            "action": "Power",
            "expected": "REDUCE SLOWLY"
          },
          {
            "id": "0",
            "action": "Mixture",
            "expected": "AS REQUIRED"
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
            "action": "Seats & seat belts",
            "expected": "UPRIGHT & SECURE"
          },
          {
            "id": "4",
            "action": "Cabin power (if equipped)",
            "expected": "OFF"
          },
        ]
      },
      "APPROACH / LANDING": {
        "color": "bg-blue-500",
        "content": [
          {
            "id": "5",
            "action": "Fuel selector",
            "expected": "BOTH"
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
            "action": "Flaps Crosswind >15 kts",
            "expected": "0–20°"
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
          
        ]
      },
      "SHUTDOWN": {
        "color": "bg-purple-500",
        "content": [
          {
            "id": "0",
            "action": "Call for fuel",
            "expected": "AS REQUIRED"
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
            "expected": "CUTOFF"
          },
          {
            "id": "3note",
            "description": "WHEN PROP STOPS",
            "highlight": true
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
      },
      "SPEEDS": {
        "color": "bg-gray-500",
        "content": [
          {
            "id": "1",
            "action": "Vg (0° flaps)",
            "expected": "68 KIAS"
          },
          {
            "id": "2",
            "description": "Glide distance approx 1 NM per 600'"
          },
          {
            "id": "3",
            "action": "Va (2550/1900 lbs)",
            "expected": "105/90 KIAS"
          },
          {
            "id": "4",
            "action": "Vfe (10°/>10°)",
            "expected": "110/85 KIAS"
          },
          {
            "id": "5",
            "action": "Vy (0°,sea level-10K')",
            "expected": "74-72 KIAS"
          },
          {
            "id": "6",
            "action": "Vx (0°,sea level-10K')",
            "expected": "62-67 KIAS"
          },
          {
            "id": "7",
            "action": "Vx (10°)",
            "expected": "56 KIAS"
          },
          {
            "id": "8",
            "action": "Vs0",
            "expected": "40 KIAS"
          },
          {
            "id": "9",
            "action": "Vs1",
            "expected": "48 KIAS"
          },
          {
            "id": "10",
            "action": "Crosswind Landing, Flaps Full",
            "expected": "<15 KNOTS"
          },
          {
            "id": "11",
            "action": "Crosswind Landing, Flaps 0-10°",
            "expected": "<20 KTS"
          }
        ]
      },
      "AIRPLANE SPECS": {
        "color": "bg-gray-500",
        "content": [
          {
            "id": "1",
            "action": "Usable fuel tabs/full",
            "expected": "35g/53g"
          },
          {
            "id": "2",
            "action": "Taxi fuel",
            "expected": "1.4g"
          },
          {
            "id": "3",
            "action": "Climb fuel",
            "expected": "13.0 GPH"
          },
          {
            "id": "4",
            "action": "Crosswind",
            "expected": "15 KTS"
          },
          {
            "id": "5",
            "action": "Maneuvers",
            "expected": "2100 RPM/90 KTS"
          },
          {
            "id": "6",
            "action": "Cruise 3000'@71%",
            "expected": "2500 RPM/115 KTS"
          },
          {
            "id": "7",
            "action": "Cruise GPH@71% (leaned)",
            "expected": "9.7 GPH"
          },
          {
            "id": "8",
            "action": "Max Ramp Wt",
            "expected": "2208 LBS"
          },
          {
            "id": "9",
            "action": "Max Takeoff & Lnding Wt",
            "expected": "2200 LBS"
          }
        ]
      },
      "EMERGENCY PROCEDURES": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "0",
            "description": "NOTE: NOT ALL EMERGENCY PROCEDURES ARE HERE",
            "highlight": true
          },
          {
            "id": "1",
            "description": "Check POH for additional procedures",
            "highlight": true
          }
        ]
      },
      "ENGINE FIRE DURING START": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Starter",
            "expected": "CONTINUE CRANKING"
          },
          {
            "id": "2",
            "action": "Mixture",
            "expected": "CUTOFF"
          },
          {
            "id": "3",
            "action": "Throttle",
            "expected": "OPEN"
          },
          {
            "id": "4",
            "action": "Fuel shutoff",
            "expected": "PULL OUT"
          },
          {
            "id": "5",
            "action": "Fuel pump",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Magnetos",
            "expected": "OFF"
          },
          {
            "id": "7",
            "action": "Standby battery",
            "expected": "OFF"
          },
          {
            "id": "8",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "9",
            "action": "Fire Extinguisher",
            "expected": "ACTIVATE"
          }
        ]
      },
      "ENGINE POWER LOSS IN FLIGHT": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Airspeed (0°/ >0°)",
            "expected": "75/70 KIAS"
          },
          {
            "id": "2",
            "action": "Landing area",
            "expected": "IDENTIFY"
          },
          {
            "id": "3",
            "action": "Radio",
            "expected": "MAYDAY"
          },
          {
            "id": "4",
            "action": "Transponder",
            "expected": "7700"
          },
          {
            "id": "5",
            "action": "Final approach (30°)",
            "expected": "70 KIAS"
          },
          {
            "id": "6",
            "action": "Fuel shutoff",
            "expected": "PUSH IN"
          },
          {
            "id": "7",
            "action": "Fuel selector",
            "expected": "BOTH"
          },
          {
            "id": "8",
            "action": "Fuel pump",
            "expected": "ON"
          },
          {
            "id": "9",
            "action": "Mixture",
            "expected": "RICH"
          },
          {
            "id": "10",
            "action": "Magnetos",
            "expected": "BOTH"
          },
          {
            "id": "11",
            "action": "Engine gauges",
            "expected": "CHECK"
          }
        ]
      },
      "POWER OFF LANDING": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Trim for best glide",
            "expected": "68 KIAS"
          },
          {
            "id": "2",
            "action": "Landing area",
            "expected": "IDENTIFY"
          },
          {
            "id": "3",
            "action": "Radio",
            "expected": "MAYDAY"
          },
          {
            "id": "4",
            "action": "Transponder",
            "expected": "7700"
          },
          {
            "id": "5",
            "action": "Final approach (30°)",
            "expected": "61 KIAS"
          },
          {
            "id": "6",
            "action": "Mixture",
            "expected": "CUTOFF"
          },
          {
            "id": "7",
            "action": "Fuel shutoff",
            "expected": "PULL OUT"
          },
          {
            "id": "8",
            "action": "Magnetos",
            "expected": "OFF"
          },
          {
            "id": "9",
            "action": "Standby batt",
            "expected": "OFF"
          },
          {
            "id": "10",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "11",
            "action": "Seat belts",
            "expected": "SECURE"
          },
          {
            "id": "12",
            "action": "Doors",
            "expected": "UNLATCH"
          }
        ]
      },
      "ENGINE FIRE IN FLIGHT": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Mixture",
            "expected": "CUTOFF"
          },
          {
            "id": "2",
            "action": "Fuel shutoff",
            "expected": "PULL OUT"
          },
          {
            "id": "3",
            "action": "Fuel pump",
            "expected": "OFF"
          },
          {
            "id": "4",
            "action": "Throttle",
            "expected": "CLOSED"
          },
          {
            "id": "5",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Cabin heat & air",
            "expected": "OFF"
          },
          {
            "id": "7",
            "action": "Speed",
            "expected": "INCREASE TO EXTINGUISH"
          },
          {
            "id": "8",
            "action": "Land",
            "expected": "IMMEDIATELY"
          }
        ]
      },
      "ELECTRICAL FIRE": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Standby batt",
            "expected": "OFF"
          },
          {
            "id": "2",
            "action": "Master switch",
            "expected": "OFF"
          },
          {
            "id": "3",
            "action": "Vents, cabin heat & air",
            "expected": "CLOSED"
          },
          {
            "id": "4",
            "action": "Fire extinguisher",
            "expected": "AS NECESSARY"
          },
          {
            "id": "5",
            "action": "Avionics",
            "expected": "OFF"
          },
          {
            "id": "6",
            "action": "Electrical switch",
            "expected": "OFF"
          }
        ]
      },
      "LANDING W/O ELEVATOR CONTROL": {
        "color": "bg-red-500",
        "content": [
          {
            "id": "1",
            "action": "Trim",
            "expected": "65 KIAS"
          },
          {
            "id": "2",
            "action": "Flaps",
            "expected": "20°"
          },
          {
            "id": "3",
            "action": "Power",
            "expected": "USE ONLY POWER TO CLIMB/DESCEND"
          }
        ]
      }
    }

export default C172Checklist;