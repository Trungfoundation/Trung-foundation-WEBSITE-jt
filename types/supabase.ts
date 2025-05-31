export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          email: string
          status: string
          subscribed_at: string
          unsubscribed_at: string | null
          source: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          status?: string
          subscribed_at?: string
          unsubscribed_at?: string | null
          source?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          status?: string
          subscribed_at?: string
          unsubscribed_at?: string | null
          source?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: string
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          event_title: string
          event_date: string | null
          message: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          event_title: string
          event_date?: string | null
          message?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          event_title?: string
          event_date?: string | null
          message?: string | null
          status?: string
        }
        Relationships: []
      }
      volunteer_applications: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          skills: string | null
          availability: string | null
          message: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          skills?: string | null
          availability?: string | null
          message?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          skills?: string | null
          availability?: string | null
          message?: string | null
          status?: string
        }
        Relationships: []
      }
      donors: {
        Row: {
          id: string
          created_at: string
          name: string | null
          email: string
          phone: string | null
          address: string | null
          is_anonymous: boolean
          total_donated: number
          last_donation_date: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name?: string | null
          email: string
          phone?: string | null
          address?: string | null
          is_anonymous?: boolean
          total_donated?: number
          last_donation_date?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string | null
          email?: string
          phone?: string | null
          address?: string | null
          is_anonymous?: boolean
          total_donated?: number
          last_donation_date?: string | null
        }
        Relationships: []
      }
      donations: {
        Row: {
          id: string
          created_at: string
          donor_id: string | null
          amount: number
          program: string | null
          message: string | null
          payment_method: string
          payment_status: string
          transaction_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          donor_id?: string | null
          amount: number
          program?: string | null
          message?: string | null
          payment_method: string
          payment_status?: string
          transaction_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          donor_id?: string | null
          amount?: number
          program?: string | null
          message?: string | null
          payment_method?: string
          payment_status?: string
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_donor_id_fkey"
            columns: ["donor_id"]
            referencedRelation: "donors"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          id: string
          created_at: string
          email: string
          role: string
          last_sign_in: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          role?: string
          last_sign_in?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          role?: string
          last_sign_in?: string | null
        }
        Relationships: []
      }
      media_files: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          file_name: string
          file_path: string
          file_type: string
          file_size: number
          alt_text: string | null
          description: string | null
          tags: string[] | null
          uploaded_by: string | null
          is_public: boolean
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          file_name: string
          file_path: string
          file_type: string
          file_size: number
          alt_text?: string | null
          description?: string | null
          tags?: string[] | null
          uploaded_by?: string | null
          is_public?: boolean
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          file_name?: string
          file_path?: string
          file_type?: string
          file_size?: number
          alt_text?: string | null
          description?: string | null
          tags?: string[] | null
          uploaded_by?: string | null
          is_public?: boolean
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "media_files_uploaded_by_fkey"
            columns: ["uploaded_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      media_gallery: {
        Row: {
          id: string
          created_at: string
          file_name: string
          file_path: string
          file_type: string
          alt_text: string | null
          tags: string[] | null
          is_public: boolean
        }
        Relationships: []
      }
    }
    Functions: {
      get_recent_submissions: {
        Args: {
          limit_count: number
        }
        Returns: {
          id: string
          type: string
          name: string
          email: string
          created_at: string
          status: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
