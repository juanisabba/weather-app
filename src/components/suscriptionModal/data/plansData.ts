import { ISuscriptionPlan } from "../../../interfaces/suscription-plans.interface";

export const basicPlan: ISuscriptionPlan[] = [
  { id: 0, name: "Clima actual", included: true },
  { id: 1, name: "Pronóstico semanal", included: false },
  { id: 2, name: "Pronóstico mensual", included: false },
  { id: 3, name: "Data histórica", included: false },
  { id: 4, name: "En múltiples idiomas", included: false },
];

export const standardPlan: ISuscriptionPlan[] = [
  { id: 0, name: "Clima actual", included: true },
  { id: 1, name: "Pronóstico semanal", included: true },
  { id: 2, name: "Pronóstico mensual", included: true },
  { id: 3, name: "Data histórica", included: false },
  { id: 4, name: "En múltiples idiomas", included: false },
];

export const premiumPlan: ISuscriptionPlan[] = [
  { id: 0, name: "Clima actual", included: true },
  { id: 1, name: "Pronóstico semanal", included: true },
  { id: 2, name: "Pronóstico mensual", included: true },
  { id: 3, name: "Data histórica", included: true },
  { id: 4, name: "En múltiples idiomas", included: true },
];
