import { Injectable } from "@angular/core";

@Injectable()
export class DataSharingService {
    countries: any[];
    genders: any[]
    constructor() {
        this.countries = [
            {
                "both": 60.5,
                "country": "Afghanistan",
                "female": 61.9,
                "male": 59.3,
                "rank": 161,
                "id": 0
            },
            {
                "both": 77.8,
                "country": "Albania",
                "female": 80.7,
                "male": 75.1,
                "rank": 37,
                "id": 1
            },
            {
                "both": 75.6,
                "country": "Algeria",
                "female": 77.5,
                "male": 73.8,
                "rank": 60,
                "id": 2
            },
            {
                "both": 52.4,
                "country": "Angola",
                "female": 54,
                "male": 50.9,
                "rank": 182,
                "id": 3
            },
            {
                "both": 76.4,
                "country": "Antigua and Barbuda",
                "female": 78.6,
                "male": 74.1,
                "rank": 49,
                "id": 4
            },
            {
                "both": 76.3,
                "country": "Argentina",
                "female": 79.9,
                "male": 72.7,
                "rank": 50,
                "id": 5
            },
            {
                "both": 74.8,
                "country": "Armenia",
                "female": 77.7,
                "male": 71.6,
                "rank": 73,
                "id": 6
            },
            {
                "both": 82.8,
                "country": "Australia",
                "female": 84.8,
                "male": 80.9,
                "rank": 4,
                "id": 7
            },
            {
                "both": 81.5,
                "country": "Austria",
                "female": 83.9,
                "male": 79,
                "rank": 18,
                "id": 8
            },
            {
                "both": 72.7,
                "country": "Azerbaijan",
                "female": 75.8,
                "male": 69.6,
                "rank": 96,
                "id": 9
            },
            {
                "both": 76.1,
                "country": "Bahamas",
                "female": 79.1,
                "male": 72.9,
                "rank": 53,
                "id": 10
            },
            {
                "both": 76.9,
                "country": "Bahrain",
                "female": 77.9,
                "male": 76.2,
                "rank": 45,
                "id": 11
            },
            {
                "both": 71.8,
                "country": "Bangladesh",
                "female": 73.1,
                "male": 70.6,
                "rank": 102,
                "id": 12
            },
            {
                "both": 75.5,
                "country": "Barbados",
                "female": 77.9,
                "male": 73.1,
                "rank": 62,
                "id": 13
            },
            {
                "both": 72.3,
                "country": "Belarus",
                "female": 78,
                "male": 66.5,
                "rank": 98,
                "id": 14
            },
            {
                "both": 81.1,
                "country": "Belgium",
                "female": 83.5,
                "male": 78.6,
                "rank": 21,
                "id": 15
            },
            {
                "both": 70.1,
                "country": "Belize",
                "female": 73.1,
                "male": 67.5,
                "rank": 112,
                "id": 16
            },
            {
                "both": 60,
                "country": "Benin",
                "female": 61.1,
                "male": 58.8,
                "rank": 162,
                "id": 17
            },
            {
                "both": 69.8,
                "country": "Bhutan",
                "female": 70.1,
                "male": 69.5,
                "rank": 114,
                "id": 18
            },
            {
                "both": 70.7,
                "country": "Bolivia",
                "female": 73.3,
                "male": 68.2,
                "rank": 108,
                "id": 19
            },
            {
                "both": 77.4,
                "country": "Bosnia and Herzegovina",
                "female": 79.7,
                "male": 75,
                "rank": 42,
                "id": 20
            },
            {
                "both": 65.7,
                "country": "Botswana",
                "female": 68.1,
                "male": 63.3,
                "rank": 137,
                "id": 21
            },
            {
                "both": 75,
                "country": "Brazil",
                "female": 78.7,
                "male": 71.4,
                "rank": 67,
                "id": 22
            },
            {
                "both": 77.7,
                "country": "Brunei Darussalam",
                "female": 79.2,
                "male": 76.3,
                "rank": 39,
                "id": 23
            },
            {
                "both": 74.5,
                "country": "Bulgaria",
                "female": 78,
                "male": 71.1,
                "rank": 80,
                "id": 24
            },
            {
                "both": 59.9,
                "country": "Burkina Faso",
                "female": 60.5,
                "male": 59.1,
                "rank": 163,
                "id": 25
            },
            {
                "both": 59.6,
                "country": "Burundi",
                "female": 61.6,
                "male": 57.7,
                "rank": 166,
                "id": 26
            },
            {
                "both": 73.3,
                "country": "Cabo Verde",
                "female": 75,
                "male": 71.3,
                "rank": 93,
                "id": 27
            },
            {
                "both": 68.7,
                "country": "Cambodia",
                "female": 70.7,
                "male": 66.6,
                "rank": 123,
                "id": 28
            },
            {
                "both": 57.3,
                "country": "Cameroon",
                "female": 58.6,
                "male": 55.9,
                "rank": 174,
                "id": 29
            },
            {
                "both": 82.2,
                "country": "Canada",
                "female": 84.1,
                "male": 80.2,
                "rank": 12,
                "id": 30
            },
            {
                "both": 52.5,
                "country": "Central African Republic",
                "female": 54.1,
                "male": 50.9,
                "rank": 181,
                "id": 31
            },
            {
                "both": 53.1,
                "country": "Chad",
                "female": 54.5,
                "male": 51.7,
                "rank": 180,
                "id": 32
            },
            {
                "both": 80.5,
                "country": "Chile",
                "female": 83.4,
                "male": 77.4,
                "rank": 28,
                "id": 33
            },
            {
                "both": 76.1,
                "country": "China",
                "female": 77.6,
                "male": 74.6,
                "rank": 53,
                "id": 34
            },
            {
                "both": 74.8,
                "country": "Colombia",
                "female": 78.4,
                "male": 71.2,
                "rank": 73,
                "id": 35
            },
            {
                "both": 63.5,
                "country": "Comoros",
                "female": 65.2,
                "male": 61.9,
                "rank": 146,
                "id": 36
            },
            {
                "both": 64.7,
                "country": "Congo",
                "female": 66.3,
                "male": 63.2,
                "rank": 142,
                "id": 37
            },
            {
                "both": 79.6,
                "country": "Costa Rica",
                "female": 82.2,
                "male": 77.1,
                "rank": 30,
                "id": 38
            },
            {
                "both": 53.3,
                "country": "Cote d'Ivoire",
                "female": 54.4,
                "male": 52.3,
                "rank": 179,
                "id": 39
            },
            {
                "both": 78,
                "country": "Croatia",
                "female": 81.2,
                "male": 74.7,
                "rank": 36,
                "id": 40
            },
            {
                "both": 79.1,
                "country": "Cuba",
                "female": 81.4,
                "male": 76.9,
                "rank": 32,
                "id": 41
            },
            {
                "both": 80.5,
                "country": "Cyprus",
                "female": 82.7,
                "male": 78.3,
                "rank": 28,
                "id": 42
            },
            {
                "both": 78.8,
                "country": "Czech Republic",
                "female": 81.7,
                "male": 75.9,
                "rank": 33,
                "id": 43
            },
            {
                "both": 70.6,
                "country": "Democratic People's Republic of Korea",
                "female": 74,
                "male": 67,
                "rank": 109,
                "id": 44
            },
            {
                "both": 59.8,
                "country": "Democratic Republic of the Congo",
                "female": 61.5,
                "male": 58.3,
                "rank": 165,
                "id": 45
            },
            {
                "both": 80.6,
                "country": "Denmark",
                "female": 82.5,
                "male": 78.6,
                "rank": 27,
                "id": 46
            },
            {
                "both": 63.5,
                "country": "Djibouti",
                "female": 65.3,
                "male": 61.8,
                "rank": 146,
                "id": 47
            },
            {
                "both": 73.9,
                "country": "Dominican Republic",
                "female": 77.1,
                "male": 70.9,
                "rank": 88,
                "id": 48
            },
            {
                "both": 76.2,
                "country": "Ecuador",
                "female": 79,
                "male": 73.5,
                "rank": 51,
                "id": 49
            },
            {
                "both": 70.9,
                "country": "Egypt",
                "female": 73.2,
                "male": 68.8,
                "rank": 107,
                "id": 50
            },
            {
                "both": 73.5,
                "country": "El Salvador",
                "female": 77.9,
                "male": 68.8,
                "rank": 91,
                "id": 51
            },
            {
                "both": 58.2,
                "country": "Equatorial Guinea",
                "female": 60,
                "male": 56.6,
                "rank": 171,
                "id": 52
            },
            {
                "both": 64.7,
                "country": "Eritrea",
                "female": 67,
                "male": 62.4,
                "rank": 142,
                "id": 53
            },
            {
                "both": 77.6,
                "country": "Estonia",
                "female": 82,
                "male": 72.7,
                "rank": 40,
                "id": 54
            },
            {
                "both": 64.8,
                "country": "Ethiopia",
                "female": 66.8,
                "male": 62.8,
                "rank": 141,
                "id": 55
            },
            {
                "both": 69.9,
                "country": "Fiji",
                "female": 73.1,
                "male": 67,
                "rank": 113,
                "id": 56
            },
            {
                "both": 81.1,
                "country": "Finland",
                "female": 83.8,
                "male": 78.3,
                "rank": 21,
                "id": 57
            },
            {
                "both": 82.4,
                "country": "France",
                "female": 85.4,
                "male": 79.4,
                "rank": 9,
                "id": 58
            },
            {
                "both": 66,
                "country": "Gabon",
                "female": 67.2,
                "male": 64.7,
                "rank": 135,
                "id": 59
            },
            {
                "both": 61.1,
                "country": "Gambia",
                "female": 62.5,
                "male": 59.8,
                "rank": 159,
                "id": 60
            },
            {
                "both": 74.4,
                "country": "Georgia",
                "female": 78.3,
                "male": 70.3,
                "rank": 82,
                "id": 61
            },
            {
                "both": 81,
                "country": "Germany",
                "female": 83.4,
                "male": 78.7,
                "rank": 24,
                "id": 62
            },
            {
                "both": 62.4,
                "country": "Ghana",
                "female": 63.9,
                "male": 61,
                "rank": 153,
                "id": 63
            },
            {
                "both": 81,
                "country": "Greece",
                "female": 83.6,
                "male": 78.3,
                "rank": 24,
                "id": 64
            },
            {
                "both": 73.6,
                "country": "Grenada",
                "female": 76.1,
                "male": 71.2,
                "rank": 89,
                "id": 65
            },
            {
                "both": 71.9,
                "country": "Guatemala",
                "female": 75.2,
                "male": 68.5,
                "rank": 101,
                "id": 66
            },
            {
                "both": 59,
                "country": "Guinea",
                "female": 59.8,
                "male": 58.2,
                "rank": 167,
                "id": 67
            },
            {
                "both": 58.9,
                "country": "Guinea-Bissau",
                "female": 60.5,
                "male": 57.2,
                "rank": 168,
                "id": 68
            },
            {
                "both": 66.2,
                "country": "Guyana",
                "female": 68.5,
                "male": 63.9,
                "rank": 133,
                "id": 69
            },
            {
                "both": 63.5,
                "country": "Haiti",
                "female": 65.5,
                "male": 61.5,
                "rank": 146,
                "id": 70
            },
            {
                "both": 74.6,
                "country": "Honduras",
                "female": 77,
                "male": 72.3,
                "rank": 77,
                "id": 71
            },
            {
                "both": 75.9,
                "country": "Hungary",
                "female": 79.1,
                "male": 72.3,
                "rank": 57,
                "id": 72
            },
            {
                "both": 82.7,
                "country": "Iceland",
                "female": 84.1,
                "male": 81.2,
                "rank": 6,
                "id": 73
            },
            {
                "both": 68.3,
                "country": "India",
                "female": 69.9,
                "male": 66.9,
                "rank": 125,
                "id": 74
            },
            {
                "both": 69.1,
                "country": "Indonesia",
                "female": 71.2,
                "male": 67.1,
                "rank": 120,
                "id": 75
            },
            {
                "both": 75.5,
                "country": "Iran",
                "female": 76.6,
                "male": 74.5,
                "rank": 62,
                "id": 76
            },
            {
                "both": 68.9,
                "country": "Iraq",
                "female": 71.8,
                "male": 66.2,
                "rank": 121,
                "id": 77
            },
            {
                "both": 81.4,
                "country": "Ireland",
                "female": 83.4,
                "male": 79.4,
                "rank": 19,
                "id": 78
            },
            {
                "both": 82.5,
                "country": "Israel",
                "female": 84.3,
                "male": 80.6,
                "rank": 8,
                "id": 79
            },
            {
                "both": 82.7,
                "country": "Italy",
                "female": 84.8,
                "male": 80.5,
                "rank": 6,
                "id": 80
            },
            {
                "both": 76.2,
                "country": "Jamaica",
                "female": 78.6,
                "male": 73.9,
                "rank": 51,
                "id": 81
            },
            {
                "both": 83.7,
                "country": "Japan",
                "female": 86.8,
                "male": 80.5,
                "rank": 1,
                "id": 82
            },
            {
                "both": 74.1,
                "country": "Jordan",
                "female": 75.9,
                "male": 72.5,
                "rank": 84,
                "id": 83
            },
            {
                "both": 70.2,
                "country": "Kazakhstan",
                "female": 74.7,
                "male": 65.7,
                "rank": 111,
                "id": 84
            },
            {
                "both": 63.4,
                "country": "Kenya",
                "female": 65.8,
                "male": 61.1,
                "rank": 149,
                "id": 85
            },
            {
                "both": 66.3,
                "country": "Kiribati",
                "female": 68.8,
                "male": 63.7,
                "rank": 131,
                "id": 86
            },
            {
                "both": 74.7,
                "country": "Kuwait",
                "female": 76,
                "male": 73.7,
                "rank": 76,
                "id": 87
            },
            {
                "both": 71.1,
                "country": "Kyrgyzstan",
                "female": 75.1,
                "male": 67.2,
                "rank": 106,
                "id": 88
            },
            {
                "both": 65.7,
                "country": "Lao People's Democratic Republic",
                "female": 67.2,
                "male": 64.1,
                "rank": 137,
                "id": 89
            },
            {
                "both": 74.6,
                "country": "Latvia",
                "female": 79.2,
                "male": 69.6,
                "rank": 77,
                "id": 90
            },
            {
                "both": 74.9,
                "country": "Lebanon",
                "female": 76.5,
                "male": 73.5,
                "rank": 70,
                "id": 91
            },
            {
                "both": 53.7,
                "country": "Lesotho",
                "female": 55.4,
                "male": 51.7,
                "rank": 178,
                "id": 92
            },
            {
                "both": 61.4,
                "country": "Liberia",
                "female": 62.9,
                "male": 59.8,
                "rank": 158,
                "id": 93
            },
            {
                "both": 72.7,
                "country": "Libya",
                "female": 75.6,
                "male": 70.1,
                "rank": 96,
                "id": 94
            },
            {
                "both": 73.6,
                "country": "Lithuania",
                "female": 79.1,
                "male": 68.1,
                "rank": 89,
                "id": 95
            },
            {
                "both": 82,
                "country": "Luxembourg",
                "female": 84,
                "male": 79.8,
                "rank": 13,
                "id": 96
            },
            {
                "both": 75.7,
                "country": "Macedonia",
                "female": 77.8,
                "male": 73.5,
                "rank": 59,
                "id": 97
            },
            {
                "both": 65.5,
                "country": "Madagascar",
                "female": 67,
                "male": 63.9,
                "rank": 140,
                "id": 98
            },
            {
                "both": 58.3,
                "country": "Malawi",
                "female": 59.9,
                "male": 56.7,
                "rank": 170,
                "id": 99
            },
            {
                "both": 75,
                "country": "Malaysia",
                "female": 77.3,
                "male": 72.7,
                "rank": 67,
                "id": 100
            },
            {
                "both": 78.5,
                "country": "Maldives",
                "female": 80.2,
                "male": 76.9,
                "rank": 34,
                "id": 101
            },
            {
                "both": 58.2,
                "country": "Mali",
                "female": 58.3,
                "male": 58.2,
                "rank": 171,
                "id": 102
            },
            {
                "both": 81.7,
                "country": "Malta",
                "female": 83.7,
                "male": 79.7,
                "rank": 16,
                "id": 103
            },
            {
                "both": 63.1,
                "country": "Mauritania",
                "female": 64.6,
                "male": 61.6,
                "rank": 150,
                "id": 104
            },
            {
                "both": 74.6,
                "country": "Mauritius",
                "female": 77.8,
                "male": 71.4,
                "rank": 77,
                "id": 105
            },
            {
                "both": 76.7,
                "country": "Mexico",
                "female": 79.5,
                "male": 73.9,
                "rank": 46,
                "id": 106
            },
            {
                "both": 69.4,
                "country": "Micronesia",
                "female": 70.6,
                "male": 68.1,
                "rank": 116,
                "id": 107
            },
            {
                "both": 68.8,
                "country": "Mongolia",
                "female": 73.2,
                "male": 64.7,
                "rank": 122,
                "id": 108
            },
            {
                "both": 76.1,
                "country": "Montenegro",
                "female": 78.1,
                "male": 74.1,
                "rank": 53,
                "id": 109
            },
            {
                "both": 74.3,
                "country": "Morocco",
                "female": 75.4,
                "male": 73.3,
                "rank": 83,
                "id": 110
            },
            {
                "both": 57.6,
                "country": "Mozambique",
                "female": 59.4,
                "male": 55.7,
                "rank": 173,
                "id": 111
            },
            {
                "both": 66.6,
                "country": "Myanmar",
                "female": 68.5,
                "male": 64.6,
                "rank": 129,
                "id": 112
            },
            {
                "both": 65.8,
                "country": "Namibia",
                "female": 68.3,
                "male": 63.1,
                "rank": 136,
                "id": 113
            },
            {
                "both": 69.2,
                "country": "Nepal",
                "female": 70.8,
                "male": 67.7,
                "rank": 118,
                "id": 114
            },
            {
                "both": 81.9,
                "country": "Netherlands",
                "female": 83.6,
                "male": 80,
                "rank": 14,
                "id": 115
            },
            {
                "both": 81.6,
                "country": "New Zealand",
                "female": 83.3,
                "male": 80,
                "rank": 17,
                "id": 116
            },
            {
                "both": 74.8,
                "country": "Nicaragua",
                "female": 77.9,
                "male": 71.5,
                "rank": 73,
                "id": 117
            },
            {
                "both": 61.8,
                "country": "Niger",
                "female": 62.8,
                "male": 60.9,
                "rank": 155,
                "id": 118
            },
            {
                "both": 54.5,
                "country": "Nigeria",
                "female": 55.6,
                "male": 53.4,
                "rank": 177,
                "id": 119
            },
            {
                "both": 81.8,
                "country": "Norway",
                "female": 83.7,
                "male": 79.8,
                "rank": 15,
                "id": 120
            },
            {
                "both": 76.6,
                "country": "Oman",
                "female": 79.2,
                "male": 75,
                "rank": 48,
                "id": 121
            },
            {
                "both": 66.4,
                "country": "Pakistan",
                "female": 67.5,
                "male": 65.5,
                "rank": 130,
                "id": 122
            },
            {
                "both": 77.8,
                "country": "Panama",
                "female": 81.1,
                "male": 74.7,
                "rank": 37,
                "id": 123
            },
            {
                "both": 62.9,
                "country": "Papua New Guinea",
                "female": 65.4,
                "male": 60.6,
                "rank": 151,
                "id": 124
            },
            {
                "both": 74,
                "country": "Paraguay",
                "female": 76,
                "male": 72.2,
                "rank": 86,
                "id": 125
            },
            {
                "both": 75.5,
                "country": "Peru",
                "female": 78,
                "male": 73.1,
                "rank": 62,
                "id": 126
            },
            {
                "both": 68.5,
                "country": "Philippines",
                "female": 72,
                "male": 65.3,
                "rank": 124,
                "id": 127
            },
            {
                "both": 77.5,
                "country": "Poland",
                "female": 81.3,
                "male": 73.6,
                "rank": 41,
                "id": 128
            },
            {
                "both": 81.1,
                "country": "Portugal",
                "female": 83.9,
                "male": 78.2,
                "rank": 21,
                "id": 129
            },
            {
                "both": 78.2,
                "country": "Qatar",
                "female": 80,
                "male": 77.4,
                "rank": 35,
                "id": 130
            },
            {
                "both": 82.3,
                "country": "Republic of Korea",
                "female": 85.5,
                "male": 78.8,
                "rank": 11,
                "id": 131
            },
            {
                "both": 72.1,
                "country": "Republic of Moldova",
                "female": 76.2,
                "male": 67.9,
                "rank": 99,
                "id": 132
            },
            {
                "both": 75,
                "country": "Romania",
                "female": 78.8,
                "male": 71.4,
                "rank": 67,
                "id": 133
            },
            {
                "both": 70.5,
                "country": "Russian Federation",
                "female": 76.3,
                "male": 64.7,
                "rank": 110,
                "id": 134
            },
            {
                "both": 66.1,
                "country": "Rwanda",
                "female": 71.1,
                "male": 60.9,
                "rank": 134,
                "id": 135
            },
            {
                "both": 75.2,
                "country": "Saint Lucia",
                "female": 77.9,
                "male": 72.6,
                "rank": 66,
                "id": 136
            },
            {
                "both": 73.2,
                "country": "Saint Vincent and the Grenadines",
                "female": 75.2,
                "male": 71.3,
                "rank": 94,
                "id": 137
            },
            {
                "both": 74,
                "country": "Samoa",
                "female": 77.5,
                "male": 70.9,
                "rank": 86,
                "id": 138
            },
            {
                "both": 67.5,
                "country": "Sao Tome and Principe",
                "female": 69.4,
                "male": 65.6,
                "rank": 127,
                "id": 139
            },
            {
                "both": 74.5,
                "country": "Saudi Arabia",
                "female": 76,
                "male": 73.2,
                "rank": 80,
                "id": 140
            },
            {
                "both": 66.7,
                "country": "Senegal",
                "female": 68.6,
                "male": 64.6,
                "rank": 128,
                "id": 141
            },
            {
                "both": 75.6,
                "country": "Serbia",
                "female": 78.4,
                "male": 72.9,
                "rank": 60,
                "id": 142
            },
            {
                "both": 73.2,
                "country": "Seychelles",
                "female": 78,
                "male": 69.1,
                "rank": 94,
                "id": 143
            },
            {
                "both": 50.1,
                "country": "Sierra Leone",
                "female": 50.8,
                "male": 49.3,
                "rank": 183,
                "id": 144
            },
            {
                "both": 83.1,
                "country": "Singapore",
                "female": 86.1,
                "male": 80,
                "rank": 3,
                "id": 145
            },
            {
                "both": 76.7,
                "country": "Slovakia",
                "female": 80.2,
                "male": 72.9,
                "rank": 46,
                "id": 146
            },
            {
                "both": 80.8,
                "country": "Slovenia",
                "female": 83.7,
                "male": 77.9,
                "rank": 26,
                "id": 147
            },
            {
                "both": 69.2,
                "country": "Solomon Islands",
                "female": 70.8,
                "male": 67.9,
                "rank": 118,
                "id": 148
            },
            {
                "both": 55,
                "country": "Somalia",
                "female": 56.6,
                "male": 53.5,
                "rank": 176,
                "id": 149
            },
            {
                "both": 62.9,
                "country": "South Africa",
                "female": 66.2,
                "male": 59.3,
                "rank": 151,
                "id": 150
            },
            {
                "both": 57.3,
                "country": "South Sudan",
                "female": 58.6,
                "male": 56.1,
                "rank": 174,
                "id": 151
            },
            {
                "both": 82.8,
                "country": "Spain",
                "female": 85.5,
                "male": 80.1,
                "rank": 4,
                "id": 152
            },
            {
                "both": 74.9,
                "country": "Sri Lanka",
                "female": 78.3,
                "male": 71.6,
                "rank": 70,
                "id": 153
            },
            {
                "both": 64.1,
                "country": "Sudan",
                "female": 65.9,
                "male": 62.4,
                "rank": 145,
                "id": 154
            },
            {
                "both": 71.6,
                "country": "Suriname",
                "female": 74.7,
                "male": 68.6,
                "rank": 103,
                "id": 155
            },
            {
                "both": 58.9,
                "country": "Swaziland",
                "female": 61.1,
                "male": 56.6,
                "rank": 168,
                "id": 156
            },
            {
                "both": 82.4,
                "country": "Sweden",
                "female": 84,
                "male": 80.7,
                "rank": 9,
                "id": 157
            },
            {
                "both": 83.4,
                "country": "Switzerland",
                "female": 85.3,
                "male": 81.3,
                "rank": 2,
                "id": 158
            },
            {
                "both": 64.5,
                "country": "Syrian Arab Republic",
                "female": 69.9,
                "male": 59.9,
                "rank": 144,
                "id": 159
            },
            {
                "both": 69.7,
                "country": "Tajikistan",
                "female": 73.6,
                "male": 66.6,
                "rank": 115,
                "id": 160
            },
            {
                "both": 74.9,
                "country": "Thailand",
                "female": 78,
                "male": 71.9,
                "rank": 70,
                "id": 161
            },
            {
                "both": 68.3,
                "country": "Timor-Leste",
                "female": 70.1,
                "male": 66.6,
                "rank": 125,
                "id": 162
            },
            {
                "both": 59.9,
                "country": "Togo",
                "female": 61.1,
                "male": 58.6,
                "rank": 163,
                "id": 163
            },
            {
                "both": 73.5,
                "country": "Tonga",
                "female": 76.4,
                "male": 70.6,
                "rank": 91,
                "id": 164
            },
            {
                "both": 71.2,
                "country": "Trinidad and Tobago",
                "female": 74.8,
                "male": 67.9,
                "rank": 105,
                "id": 165
            },
            {
                "both": 75.3,
                "country": "Tunisia",
                "female": 77.8,
                "male": 73,
                "rank": 65,
                "id": 166
            },
            {
                "both": 75.8,
                "country": "Turkey",
                "female": 78.9,
                "male": 72.6,
                "rank": 58,
                "id": 167
            },
            {
                "both": 66.3,
                "country": "Turkmenistan",
                "female": 70.5,
                "male": 62.2,
                "rank": 131,
                "id": 168
            },
            {
                "both": 62.3,
                "country": "Uganda",
                "female": 64.3,
                "male": 60.3,
                "rank": 154,
                "id": 169
            },
            {
                "both": 71.3,
                "country": "Ukraine",
                "female": 76.1,
                "male": 66.3,
                "rank": 104,
                "id": 170
            },
            {
                "both": 77.1,
                "country": "United Arab Emirates",
                "female": 78.6,
                "male": 76.4,
                "rank": 43,
                "id": 171
            },
            {
                "both": 81.2,
                "country": "United Kingdom",
                "female": 83,
                "male": 79.4,
                "rank": 20,
                "id": 172
            },
            {
                "both": 61.8,
                "country": "United Republic of Tanzania",
                "female": 63.8,
                "male": 59.9,
                "rank": 155,
                "id": 173
            },
            {
                "both": 79.3,
                "country": "United States of America",
                "female": 81.6,
                "male": 76.9,
                "rank": 31,
                "id": 174
            },
            {
                "both": 77,
                "country": "Uruguay",
                "female": 80.4,
                "male": 73.3,
                "rank": 44,
                "id": 175
            },
            {
                "both": 69.4,
                "country": "Uzbekistan",
                "female": 72.7,
                "male": 66.1,
                "rank": 116,
                "id": 176
            },
            {
                "both": 72,
                "country": "Vanuatu",
                "female": 74,
                "male": 70.1,
                "rank": 100,
                "id": 177
            },
            {
                "both": 74.1,
                "country": "Venezuela",
                "female": 78.5,
                "male": 70,
                "rank": 84,
                "id": 178
            },
            {
                "both": 76,
                "country": "Vietnam",
                "female": 80.7,
                "male": 71.3,
                "rank": 56,
                "id": 179
            },
            {
                "both": 65.7,
                "country": "Yemen",
                "female": 67.2,
                "male": 64.3,
                "rank": 137,
                "id": 180
            },
            {
                "both": 61.8,
                "country": "Zambia",
                "female": 64.7,
                "male": 59,
                "rank": 155,
                "id": 181
            },
            {
                "both": 60.7,
                "country": "Zimbabwe",
                "female": 62.3,
                "male": 59,
                "rank": 160,
                "id": 182
            }
        ]
        this.genders = [
            {
                gender: 'Male',
                value: 'male'
            },
            {
                gender: 'Female',
                value: 'female'
            },
            {
                gender: 'Other',
                value: 'both'
            }
        ];
    }
    /**
     * return the list of countries
     */
    getCountries() {
        return this.countries;
    }
    /**
     * return the list of genders
     */
    getGenders() {
        return this.genders;
    }
    /**
     * get a country by its id number
     * @param id id of a country
     */
    getCountryById(id: number) {
        for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i].id == id) {
                return this.countries[i];
            }
        }
        return null;
    }
    /**
     * get a country by its name
     * @param country name of a country
     */
    getCountryByName(name: string) {
        for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i].country == name) {
                return this.countries[i];
            }
        }
        return null;
    }
}