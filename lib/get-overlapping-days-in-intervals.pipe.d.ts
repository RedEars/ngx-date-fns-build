import { PipeTransform } from '@angular/core';
export declare class GetOverlappingDaysInIntervalsPipe implements PipeTransform {
    transform(intervalLeft: {
        start: any;
        end: any;
    }, intervalRight: {
        start: any;
        end: any;
    }): number;
}
export declare class GetOverlappingDaysInIntervalsPipeModule {
}
