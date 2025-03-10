export type Database = {
	Tables: {
	  animes: {
		Row: {
		  id: number;
		  name: string;
		  created_at: string; // Sempre estará presente nas linhas retornadas do banco
		};
		Insert: {
		  id?: number; // O banco pode gerar um ID automaticamente se for SERIAL
		  name: string;
		  created_at?: string; // Opcional, pois o banco define automaticamente
		};
		Update: {
		  id?: number;
		  name?: string;
		  created_at?: string; // Opcional, caso precise ser alterado
		};
		Relationships: [];
	  };
	};
	Views: {};
	Functions: {};
	Enums: {};
	CompositeTypes: {};
  };
  