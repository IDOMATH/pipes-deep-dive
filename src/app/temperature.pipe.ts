import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "temperature", standalone: true })
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: "C" | "F",
    shouldConvert: boolean
  ) {
    let val: number;

    if (typeof value === "string") {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputScale = "°";
    let outputTemp: number;
    if (shouldConvert && inputType === "F") {
      outputScale += "C";
      outputTemp = (val - 32) * (5 / 9);
    } else if (shouldConvert && inputType === "C") {
      outputScale += "F";
      outputTemp = val * (9 / 5) + 32;
    } else {
      outputScale += inputType;
      outputTemp = val;
    }

    return `${outputTemp.toFixed(2)} ${outputScale}`;
  }
}
