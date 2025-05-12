export declare class KhipuAuthService {
    generateAuthHeaders(receiverId: string, secret: string, method: string, url: string, params?: Record<string, any>): {
        Authorization: string;
        'X-Khipu-Timestamp': string;
        'X-Khipu-Nonce': string;
    };
}
//# sourceMappingURL=auth.service.d.ts.map