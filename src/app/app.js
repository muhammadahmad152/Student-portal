import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import * as i0 from "@angular/core";
export class AppComponent {
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "main-content", 1, "main-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "app-footer");
        } }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["[_nghost-%COMP%] { display: flex; width: 100%; min-height: 100vh; flex-direction: column; }\n.main-content[_ngcontent-%COMP%] { flex: 1 0 auto; width: 100%; min-width: 0; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: "<app-navbar></app-navbar>\n<main class=\"main-content\" id=\"main-content\">\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n", styles: [":host { display: flex; width: 100%; min-height: 100vh; flex-direction: column; }\n.main-content { flex: 1 0 auto; width: 100%; min-width: 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.ts", lineNumber: 13 }); })();
