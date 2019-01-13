export interface EmailServiceInterface {
    send(name: String, email: String, message: String, date: Date): void;
}
