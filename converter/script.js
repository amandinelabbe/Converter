const FACTEURS_CONVERSION = {
    km: 1e3,
    m: 1,
    dm: 1e-1,
    cm: 1e-2,
    mm: 1e-3,
    µm: 1e-6,
    nm: 1e-9,
    inch: 2.54e-2,
    foot: 3.048e-1,
    yd: 9.144e-1,
    mile: 1609.34,

    t: 1e3,
    qu: 1e2,
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    µg: 1e-9,
    gr: 6.47e-5,
    ou: 2.83e-2,
    po: 4.53e-1,
    st: 6.65,
    to: 907.18,

    EiffelTower: 300,
    BurjKhalifa: 828,
    ESB: 381,
    TajMahal: 73,
    PisaTower: 57,
    LibertyStatue: 93,
    GoldenGate: 2737,
    TriumphalArch: 50,
    MontparnasseTower: 210,
    SagradaFamilia: 172,
    SydneyOpera: 65,
    BigBen: 96,
    ChichenItza: 24,

    human: 1.75,
    chameau: 2,
    ariane: 56,
    smartphone: 0.15,
    alien: 2.5,
    unicorn: 1.5,
    PierreMauroy: 31,
    Earth: 12742e3,
    car: 2.1,
    ant: 3e-3,
    pen: 0.15,
    MontBlanc: 4810,

    AED: 3.887245, AFN: 94.192489, ALL: 115.180417, AMD: 412.138485, ANG: 1.908674,
    AOA: 536.048566, ARS: 207.11755, AUD: 1.573445,
    AWG: 1.905666, AZN: 1.799492, BAM: 1.952193, BBD: 2.117987, BDT: 113.358569, BGN: 1.962942,
    BHD: 0.398233, BIF: 2184.409175, BMD: 1.058567, BND: 1.425851, BOB: 7.31669, BRL: 5.514352, BSD: 1.058864,
    BTC: 0.000046, BTN: 87.61392, BWP: 14.052254, BYN: 2.672983, BZD: 2.134391, CAD: 1.443209,
    CDF: 2164.300804, CHF: 0.995661, CLF: 0.032351, CLP: 871.044518, CNH: 7.377894,
    CNY: 7.362705, COP: 5138.544861, CRC: 590.349381, CUC: 1.058426,
    CUP: 27.252478, CVE: 110.341366, CZK: 23.728151, DJF: 188.202152, DKK: 7.471438,
    DOP: 59.060551, DZD: 144.62713, EGP: 32.321228, ERN: 15.875683, ETB: 56.944382,
    EUR: 1.000145, FJD: 2.349931, FKP: 0.886449, FRF: 0.15244902, GBP: 0.886536, GEL: 2.789247,
    GGP: 0.886938, GHS: 13.600439, GIP: 0.886251, GMD: 64.664597, GNF: 9111.945813,
    GTQ: 8.268809, GYD: 223.392903, HKD: 8.307926, HNL: 26.12029, HRK: 7.561804,
    HTG: 157.955631, HUF: 381.472919, IDR: 16155.415976, ILS: 3.882305, IMP: 0.886262,
    INR: 87.772193, IQD: 1545.173135, IRR: 44794.135533, ISK: 153.22653, JEP: 0.886706,
    JMD: 163.321611, JOD: 0.751592, JPY: 144.437319, KES: 134.303161, KGS: 92.520489,
    KHR: 4283.529342, KMF: 494.138703, KPW: 952.504475, KRW: 1391.505204, KWD: 0.325575,
    KYD: 0.882858, KZT: 475.447929, LAK: 17854.035959, LBP: 15906.725248, LKR: 386.436571,
    LRD: 162.747686, LSL: 19.489417, LYD: 5.106224, MAD: 11.025973, MDL: 19.909277, MGA: 4548.205133,
    MKD: 61.542457, MMK: 2223.321179, MNT: 3605.719746, MOP: 8.558696, MRU: 36.883556, MUR: 48.980193,
    MVR: 16.245733, MWK: 1086.75353, MXN: 19.459282, MYR: 4.694539, MZN: 67.628283, NAD: 19.484149,
    NGN: 487.301595, NIO: 38.502505, NOK: 11.008932, NPR: 140.181289, NZD: 1.721989, OMR: 0.407565,
    PAB: 1.058657, PEN: 4.040571, PGK: 3.725481, PHP: 58.455719, PKR: 275.379754, PLN: 4.737123,
    PYG: 7742.52672, QAR: 3.853183, RON: 4.94279, RSD: 117.741634, RUB: 80.450806, RWF: 1155.175311,
    SAR: 3.968738, SBD: 8.726392, SCR: 13.789145, SDG: 622.30299, SEK: 11.117535, SGD: 1.429256,
    SHP: 0.886303, SLL: 18695.532938, SOS: 602.194109, SRD: 35.625201, SSP: 137.859575, STD: 24155.485745,
    STN: 24.580736, SVC: 9.264582, SYP: 2659.105725, SZL: 19.377596, THB: 36.827757, TJS: 10.598258,
    TMT: 3.715628, TND: 3.313319, TOP: 2.490498, TRY: 19.975905, TTD: 7.186941, TWD: 32.471516,
    TZS: 2475.451142, UAH: 38.9083, UGX: 3938.362496, USD: 1.058935, UYU: 41.168435, UZS: 12022.714911,
    VES: 25.808469, VND: 25175.204778, VUV: 124.930225, WST: 2.855869, XAF: 655.957972, XAG: 0.051825,
    XAU: 0.001109, XCD: 2.860494, XDR: 0.796296, XOF: 655.957413, XPD: 0.001123, XPF: 119.332858,
    XPT: 0.001732, YER: 264.955603, ZAR: 19.498319, ZMW: 20.883832, ZWL: 340.78587
};


function echanger() {
    var select1 = document.getElementById("unite-entree");
    var select2 = document.getElementById("unite-sortie");
    var temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;
}

function convertir() {
    const valeur = parseFloat(document.getElementById('valeur').value);
    const uniteEntree = document.getElementById('unite-entree').value;
    const uniteSortie = document.getElementById('unite-sortie').value;
    const resultatElement = document.getElementById('resultat');
    const facteurEntree = FACTEURS_CONVERSION[uniteEntree];
    const facteurSortie = FACTEURS_CONVERSION[uniteSortie];
    const resultat = (valeur * facteurEntree) / facteurSortie;

    if (resultat < 0.1) {
        resultatElement.textContent = `${valeur} ${uniteEntree} = ${resultat} ${uniteSortie}`;
    } else {
        resultatElement.textContent = `${valeur} ${uniteEntree} = ${resultat.toFixed(2)} ${uniteSortie}`;
    }

}

document.getElementById('convertir').addEventListener('click', convertir);


