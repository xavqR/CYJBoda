export interface EmailServiceInterface {
    sendContacto(name: String, email: String, message: String, date: Date): void;
    sendConfirmacion(name: String, email: String, message: String, date: Date): void;
}
