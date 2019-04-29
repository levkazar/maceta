import { LoggerService } from "@nestjs/common";
export declare class Logger implements LoggerService {
    log(message: string): void;
    error(error: string | Error, remark?: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
    newLine(): void;
    private static write;
}