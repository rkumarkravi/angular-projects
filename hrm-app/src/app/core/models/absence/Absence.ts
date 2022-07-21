import { AbsenceType } from "../../enums/AbsenceType.enum";

export interface Absence {
  id: number;
  absenceType: AbsenceType;
  leaveReason: string;
  fromDate: Date;
  toDate: Date;
  comments?: any;
}
