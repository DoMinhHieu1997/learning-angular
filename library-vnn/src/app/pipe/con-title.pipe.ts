import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conTitle'
})
export class ConTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value == 'chinh-tri-gia') {
      return value = 'Chính trị gia';
    } else if (value == 'van-dong-vien') {
      return value = 'Vận động viên';
    } else if (value == 'cau-lac-bo') {
      return value = 'Câu lạc bộ';
    } else if (value == 'sao') {
      return value = 'Sao';
    }
  }

}
