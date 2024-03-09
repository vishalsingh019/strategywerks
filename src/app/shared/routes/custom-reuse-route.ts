import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle, UrlSegment } from '@angular/router'

export class CustomReuseStrategy implements RouteReuseStrategy {
  storedHandles: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data['reuseRoute'] ;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const id = this.createIdentifier(route);
    if (route.data['reuseRoute']) {
      this.storedHandles[id] = handle;
    }

    // console.log(this.storedHandles, 'STORE')
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const id = this.createIdentifier(route);
    const handle = this.storedHandles[id];
    const canAttach = !!route.routeConfig && !!handle;
    return canAttach;
  }

  retrieve(route: ActivatedRouteSnapshot): any {
    const id = this.createIdentifier(route);
    if (!route.routeConfig || !this.storedHandles[id]) return null;
    return this.storedHandles[id];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // console.log(future.routeConfig, curr.routeConfig)
    return future.routeConfig === curr.routeConfig;
  }

  private createIdentifier(route: ActivatedRouteSnapshot) {
//   console.log(route.pathFromRoot)
    const segments: UrlSegment[][] = route.pathFromRoot.map(r => r.url);
    const subpaths = ([] as UrlSegment[]).concat(...segments).map(segment => segment.path);

    // console.log(segments.length + '-' + subpaths.join('/'))
    return segments.length + '-' + subpaths.join('/');
  }
}