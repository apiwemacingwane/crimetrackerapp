const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const reportSchema = mongoose.Schema({
    AllTheftNotMentionedElsewhere: { type: Number },
    TheftOutOfOrFromMotorVehicle: { type: Number },
    BurglaryAtResidentialPremises: { type: Number },
    TheftOfMotorVehicleAndMotorcycle: { type: Number },
    CommercialCrime: { type: Number },
    CommonAssault: { type: Number },
    Shoplifting: { type: Number },
    MaliciousDamageToProperty: { type: Number },
    BurglaryAtNonResidentialPremises: { type: Number },
    RobberyWithAggravatingCircumstances: { type: Number },
    DrugRelatedCrime: { type: Number },
    DrivingUnderTheInfluenceOfAlcoholOrDrugs: { type: Number },
    AssaultWithTheIntentToInflictGrievousBodilyHarm: { type: Number },
    SexualOffences: { type: Number },
    CommonRobbery: { type: Number },
    AttemptedMurder: { type: Number },
    RobberyAtResidentialPremises: { type: Number },
    Murder: { type: Number },
    IllegalPossessionOfFirearmsAndAmmunition: { type: Number },
    Carjacking: { type: Number },
    Arson: { type: Number },
    RobberyAtNonResidentialPremises: { type: Number },
    BankRobbery: { type: Number },
    RobberyOfCashInTransit: { type: Number },
    year: { type: String },
});

const CrimeAlert = mongoose.model('Report', reportSchema);
module.exports = CrimeAlert;

