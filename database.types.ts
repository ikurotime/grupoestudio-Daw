/* eslint-disable @typescript-eslint/no-explicit-any */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      _TagToUser: {
        Row: {
          A: number
          B: string
        }
        Insert: {
          A: number
          B: string
        }
        Update: {
          A?: number
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: '_TagToUser_A_fkey'
            columns: ['A']
            isOneToOne: false
            referencedRelation: 'Tag'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: '_TagToUser_B_fkey'
            columns: ['B']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          }
        ]
      }
      Collaboration: {
        Row: {
          createdAt: string
          date: string | null
          description: string | null
          id: number
          title: string | null
          userId: string
        }
        Insert: {
          createdAt?: string
          date?: string | null
          description?: string | null
          id?: number
          title?: string | null
          userId: string
        }
        Update: {
          createdAt?: string
          date?: string | null
          description?: string | null
          id?: number
          title?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Collaboration_userId_fkey'
            columns: ['userId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          }
        ]
      }
      DisplacementMethod: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      Language: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      Message: {
        Row: {
          content: string | null
          id: number
          receiverId: string
          senderId: string
        }
        Insert: {
          content?: string | null
          id?: number
          receiverId: string
          senderId: string
        }
        Update: {
          content?: string | null
          id?: number
          receiverId?: string
          senderId?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Message_receiverId_fkey'
            columns: ['receiverId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'Message_senderId_fkey'
            columns: ['senderId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          }
        ]
      }
      Proposal: {
        Row: {
          description: string | null
          id: number
          receiverId: string
          title: string | null
          userId: string
        }
        Insert: {
          description?: string | null
          id?: number
          receiverId: string
          title?: string | null
          userId: string
        }
        Update: {
          description?: string | null
          id?: number
          receiverId?: string
          title?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Proposal_receiverId_fkey'
            columns: ['receiverId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'Proposal_userId_fkey'
            columns: ['userId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          }
        ]
      }
      Recommendation: {
        Row: {
          id: number
          userId: string
        }
        Insert: {
          id?: number
          userId: string
        }
        Update: {
          id?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Recommendation_userId_fkey'
            columns: ['userId']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          }
        ]
      }
      Role: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      Tag: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      User: {
        Row: {
          [x: string]: any
          createdAt: string
          displacementMethodId: number | null
          email: string | null
          id: string
          imageUrl: string | null
          languageId: number | null
          location: string | null
          name: string | null
          profileDescription: string | null
          profileTitle: string | null
          rating: number | null
          role: number | null
          surname: string | null
        }
        Insert: {
          createdAt?: string
          displacementMethodId?: number | null
          email?: string | null
          id: string
          imageUrl?: string | null
          languageId?: number | null
          location?: string | null
          name?: string | null
          profileDescription?: string | null
          profileTitle?: string | null
          rating?: number | null
          role?: number | null
          surname?: string | null
        }
        Update: {
          createdAt?: string
          displacementMethodId?: number | null
          email?: string | null
          id?: string
          imageUrl?: string | null
          languageId?: number | null
          location?: string | null
          name?: string | null
          profileDescription?: string | null
          profileTitle?: string | null
          rating?: number | null
          role?: number | null
          surname?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'User_displacementMethodId_fkey'
            columns: ['displacementMethodId']
            isOneToOne: false
            referencedRelation: 'DisplacementMethod'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'User_languageId_fkey'
            columns: ['languageId']
            isOneToOne: false
            referencedRelation: 'Language'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
