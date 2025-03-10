export type Database = {
  public: {
    Tables: {
      animes: {
        Row: {
          id: number;
          nome: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          nome: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          nome?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
  };
};
