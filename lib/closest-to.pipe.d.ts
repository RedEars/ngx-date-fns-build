import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class ClosestToPipe implements PipeTransform {
    transform(dateToCompare: DateFnsInputDate, datesArray: any[]): Date;
}
export declare class ClosestToPipeModule {
}
