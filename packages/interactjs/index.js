import interact, { init as initInteract } from '@interactjs/interact';
import * as modifiers from '@interactjs/modifiers';
import '@interactjs/types';
import extend from '@interactjs/utils/extend';
import * as snappers from '@interactjs/utils/snappers';
if (typeof window === 'object' && !!window) {
    init(window);
}
export function init(win) {
    initInteract(win);
    return interact.use({
        id: 'interactjs',
        install(scope) {
            interact.modifiers = extend(scope.modifiers, modifiers);
            interact.snappers = snappers;
            interact.createSnapGrid = interact.snappers.grid;
        },
    });
}
export default interact;
interact['default'] = interact; // tslint:disable-line no-string-literal
interact['init'] = init; // tslint:disable-line no-string-literal
if (typeof module === 'object' && !!module) {
    module.exports = interact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsRUFBRSxFQUFFLElBQUksSUFBSSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNyRSxPQUFPLEtBQUssU0FBUyxNQUFNLHVCQUF1QixDQUFBO0FBQ2xELE9BQU8sbUJBQW1CLENBQUE7QUFDMUIsT0FBTyxNQUFNLE1BQU0sMEJBQTBCLENBQUE7QUFDN0MsT0FBTyxLQUFLLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQTtBQVV0RCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO0lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtDQUNiO0FBRUQsTUFBTSxVQUFVLElBQUksQ0FBRSxHQUFXO0lBQy9CLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUVqQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDbEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsT0FBTyxDQUFFLEtBQUs7WUFDWixRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZELFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1lBQzVCLFFBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUE7UUFDbEQsQ0FBQztLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQTtBQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFBLENBQUMsd0NBQXdDO0FBQ3ZFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUEsQ0FBQyx3Q0FBd0M7QUFFaEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtJQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnRlcmFjdCwgeyBpbml0IGFzIGluaXRJbnRlcmFjdCB9IGZyb20gJ0BpbnRlcmFjdGpzL2ludGVyYWN0J1xuaW1wb3J0ICogYXMgbW9kaWZpZXJzIGZyb20gJ0BpbnRlcmFjdGpzL21vZGlmaWVycydcbmltcG9ydCAnQGludGVyYWN0anMvdHlwZXMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzL2V4dGVuZCdcbmltcG9ydCAqIGFzIHNuYXBwZXJzIGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzL3NuYXBwZXJzJ1xuXG5kZWNsYXJlIG1vZHVsZSAnQGludGVyYWN0anMvaW50ZXJhY3QvaW50ZXJhY3QnIHtcbiAgICBpbnRlcmZhY2UgSW50ZXJhY3RTdGF0aWMge1xuICAgICAgICBtb2RpZmllcnM/OiBhbnlcbiAgICAgICAgc25hcHBlcnM/OiB0eXBlb2Ygc25hcHBlcnMgJiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICAgICAgIGNyZWF0ZVNuYXBHcmlkPzogdHlwZW9mIHNuYXBwZXJzLmdyaWRcbiAgICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiAhIXdpbmRvdykge1xuICBpbml0KHdpbmRvdylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKHdpbjogV2luZG93KSB7XG4gIGluaXRJbnRlcmFjdCh3aW4pXG5cbiAgcmV0dXJuIGludGVyYWN0LnVzZSh7XG4gICAgaWQ6ICdpbnRlcmFjdGpzJyxcbiAgICBpbnN0YWxsIChzY29wZSkge1xuICAgICAgaW50ZXJhY3QubW9kaWZpZXJzID0gZXh0ZW5kKHNjb3BlLm1vZGlmaWVycywgbW9kaWZpZXJzKVxuICAgICAgaW50ZXJhY3Quc25hcHBlcnMgPSBzbmFwcGVyc1xuICAgICAgaW50ZXJhY3QuY3JlYXRlU25hcEdyaWQgPSBpbnRlcmFjdC5zbmFwcGVycy5ncmlkXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RcbmludGVyYWN0WydkZWZhdWx0J10gPSBpbnRlcmFjdCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLXN0cmluZy1saXRlcmFsXG5pbnRlcmFjdFsnaW5pdCddID0gaW5pdCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLXN0cmluZy1saXRlcmFsXG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiAhIW1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IGludGVyYWN0XG59XG4iXX0=