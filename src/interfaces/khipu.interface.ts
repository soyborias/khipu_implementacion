export interface BankResponse {
  bank_id: string;      // Identificador del banco
  name: string;         // Nombre del banco
  message: string;      // Mensaje con particularidades del banco
  min_amount: number;   // Monto mínimo que acepta el banco
  type: 'Persona' | 'Empresa';  // Tipo de banco
  parent: string;       // Identificador del banco padre
  logo_url?: string;    // URL del logo del banco (opcional)
}