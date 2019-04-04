"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sapRouter_1 = require("./sapRouter");
const serverConfiguration_provider_1 = require("../configuration/serverConfiguration.provider");
const configurationBase_1 = require("../configuration/configurationBase");
const logger_1 = require("../logger");
const PersistedConfiguration = configurationBase_1.ConfigurationBase.getGlobalConfiguration();
let ServerModule = class ServerModule {
};
ServerModule = __decorate([
    common_1.Module({
        controllers: [sapRouter_1.SapRouter],
        providers: [serverConfiguration_provider_1.ServerConfiguration, PersistedConfiguration, logger_1.Logger],
    })
], ServerModule);
exports.ServerModule = ServerModule;
