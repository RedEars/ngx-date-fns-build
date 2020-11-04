import { NgModule, Pipe } from '@angular/core';
import min from 'date-fns/min';
export class MinPipe {
    transform(dates) {
        return min(dates);
    }
}
MinPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsMin' },] }
];
export class MinPipeModule {
}
MinPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MinPipe],
                exports: [MinPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9taW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBRy9CLE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0FBV3pCLE1BQU0sT0FBTyxhQUFhOzs7WUFKekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtaW4gZnJvbSAnZGF0ZS1mbnMvbWluJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc01pbicgfSlcbmV4cG9ydCBjbGFzcyBNaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlczogYW55W10pOiBEYXRlIHtcbiAgICByZXR1cm4gbWluKGRhdGVzKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNaW5QaXBlXSxcbiAgZXhwb3J0czogW01pblBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE1pblBpcGVNb2R1bGUge31cbiJdfQ==