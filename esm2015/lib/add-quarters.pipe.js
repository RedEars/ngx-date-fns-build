import { NgModule, Pipe } from '@angular/core';
import addQuarters from 'date-fns/addQuarters';
export class AddQuartersPipe {
    transform(date, amount) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return addQuarters(date, amount);
    }
}
AddQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddQuarters' },] }
];
export class AddQuartersPipeModule {
}
AddQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddQuartersPipe],
                exports: [AddQuartersPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXF1YXJ0ZXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9hZGQtcXVhcnRlcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQWNqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBhZGRRdWFydGVycyBmcm9tICdkYXRlLWZucy9hZGRRdWFydGVycyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNBZGRRdWFydGVycycgfSlcbmV4cG9ydCBjbGFzcyBBZGRRdWFydGVyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gYWRkUXVhcnRlcnMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBZGRRdWFydGVyc1BpcGVdLFxuICBleHBvcnRzOiBbQWRkUXVhcnRlcnNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRRdWFydGVyc1BpcGVNb2R1bGUge31cbiJdfQ==