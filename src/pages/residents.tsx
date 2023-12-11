import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { api } from "~/utils/api";
import { RouterOutputs } from "~/utils/api";

type Resident = RouterOutputs["user"]["createUser"];

export default function Residents() {
  const { data: residents } = api.user.listUsers.useQuery();
  const { data: highestUnoccupiedPoints } =
    api.user.getHighestUnoccupiedPoints.useQuery();
  return (
    <div className="mx-8 mt-32 flex flex-col items-center justify-center bg-background">
      <h1 className="glow mb-12 text-center text-7xl font-bold text-primary  drop-shadow-md">
        <span className="text-5xl">Current Queue point:</span>
        <br />
        <span>{highestUnoccupiedPoints}</span>
      </h1>
      <Table>
        {/* <TableCaption></TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>MatricNumber</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Room Selected</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {residents?.map((resident) => {
            const name = resident.name;
            const gender = resident.gender.description;
            const points = resident.points;
            const matricNumber = resident.matricNumber;
            return (
              <TableRow key={resident.id}>
                <TableCell className="font-bold">{name}</TableCell>
                <TableCell
                  className={gender === "Male" ? "bg-blue-300" : "bg-red-300"}
                >
                  {gender}
                </TableCell>
                <TableCell className="font-bold">{matricNumber}</TableCell>
                <TableCell
                  className={
                    points >= 100
                      ? "bg-green-300"
                      : points >= 80
                        ? "bg-gray-200"
                        : ""
                  }
                >
                  {points}
                </TableCell>
                <TableCell>
                  {resident.occupies ? resident.occupies.name : "None"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
