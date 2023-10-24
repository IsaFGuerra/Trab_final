import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateStrokeService {
  async generateHL(doc, xi: number, xf: number, y: number) {
    // console.log(xi, xf, y);
    if (!isNaN(xi) && !isNaN(xf) && !isNaN(y)) {
      doc
        .strokeColor('#e4e4e4')
        .lineWidth(1)
        .moveTo(xi, y)
        .lineTo(xf, y)
        .stroke();
    } else {
      throw new Error('Invalid parameters');
    }
  }

  async generateVL(doc, x: number, yi: number, yf: number) {
    if (!isNaN(x) && !isNaN(yi) && !isNaN(yf)) {
      doc
        .strokeColor('#e4e4e4')
        .lineWidth(1)
        .moveTo(x, yi)
        .lineTo(x, yf)
        .stroke();
    } else {
      throw new Error('Invalid parameters');
    }
  }
}
