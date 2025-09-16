export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      about_content: {
        Row: {
          content: string | null
          created_at: string
          icon_name: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          layout_type: string | null
          section_key: string
          statistics: Json | null
          subtitle: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          layout_type?: string | null
          section_key: string
          statistics?: Json | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          layout_type?: string | null
          section_key?: string
          statistics?: Json | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          country: string | null
          created_at: string
          duration_ms: number | null
          event_type: string
          id: string
          path: string | null
          referrer: string | null
          session_id: string
          target: string | null
          user_agent: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          duration_ms?: number | null
          event_type: string
          id?: string
          path?: string | null
          referrer?: string | null
          session_id: string
          target?: string | null
          user_agent?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          duration_ms?: number | null
          event_type?: string
          id?: string
          path?: string | null
          referrer?: string | null
          session_id?: string
          target?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      benefits: {
        Row: {
          created_at: string
          description: string
          icon_name: string | null
          id: string
          is_active: boolean | null
          sort_order: number | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      buttons_content: {
        Row: {
          button_key: string
          button_text: string
          button_type: string | null
          button_url: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          button_key: string
          button_text: string
          button_type?: string | null
          button_url?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          button_key?: string
          button_text?: string
          button_type?: string | null
          button_url?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          is_read: boolean
          last_name: string
          message: string
          project_type: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          is_read?: boolean
          last_name: string
          message: string
          project_type: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          is_read?: boolean
          last_name?: string
          message?: string
          project_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_sections: {
        Row: {
          content: string | null
          created_at: string
          id: string
          image_url: string | null
          is_active: boolean | null
          metadata: Json | null
          section_key: string
          sort_order: number | null
          subtitle: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          metadata?: Json | null
          section_key: string
          sort_order?: number | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          metadata?: Json | null
          section_key?: string
          sort_order?: number | null
          subtitle?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      footer_content: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          company_description: string | null
          company_name: string | null
          copyright_text: string | null
          created_at: string | null
          email: string | null
          id: string
          is_active: boolean | null
          legal_links: Json | null
          phone: string | null
          quick_links: Json | null
          social_links: Json | null
          support_links: Json | null
          updated_at: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          company_description?: string | null
          company_name?: string | null
          copyright_text?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          legal_links?: Json | null
          phone?: string | null
          quick_links?: Json | null
          social_links?: Json | null
          support_links?: Json | null
          updated_at?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          company_description?: string | null
          company_name?: string | null
          copyright_text?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          legal_links?: Json | null
          phone?: string | null
          quick_links?: Json | null
          social_links?: Json | null
          support_links?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      hero_content: {
        Row: {
          background_image_url: string | null
          created_at: string
          cta_primary_text: string | null
          cta_primary_url: string | null
          cta_secondary_text: string | null
          description: string | null
          highlighted_text: string | null
          id: string
          is_active: boolean | null
          main_title: string
          stats: Json | null
          updated_at: string
        }
        Insert: {
          background_image_url?: string | null
          created_at?: string
          cta_primary_text?: string | null
          cta_primary_url?: string | null
          cta_secondary_text?: string | null
          description?: string | null
          highlighted_text?: string | null
          id?: string
          is_active?: boolean | null
          main_title: string
          stats?: Json | null
          updated_at?: string
        }
        Update: {
          background_image_url?: string | null
          created_at?: string
          cta_primary_text?: string | null
          cta_primary_url?: string | null
          cta_secondary_text?: string | null
          description?: string | null
          highlighted_text?: string | null
          id?: string
          is_active?: boolean | null
          main_title?: string
          stats?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      portfolio_items: {
        Row: {
          category: string
          client: string | null
          created_at: string
          description: string
          duration: string | null
          full_description: string | null
          id: string
          image_url: string
          is_active: boolean | null
          results: Json | null
          sort_order: number | null
          tags: string[] | null
          title: string
          updated_at: string
          year: string | null
        }
        Insert: {
          category: string
          client?: string | null
          created_at?: string
          description: string
          duration?: string | null
          full_description?: string | null
          id?: string
          image_url: string
          is_active?: boolean | null
          results?: Json | null
          sort_order?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string
          year?: string | null
        }
        Update: {
          category?: string
          client?: string | null
          created_at?: string
          description?: string
          duration?: string | null
          full_description?: string | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          results?: Json | null
          sort_order?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          year?: string | null
        }
        Relationships: []
      }
      pricing_plans: {
        Row: {
          created_at: string
          description: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          is_popular: boolean | null
          name: string
          period: string | null
          price: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          is_popular?: boolean | null
          name: string
          period?: string | null
          price: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          is_popular?: boolean | null
          name?: string
          period?: string | null
          price?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean | null
          service_key: string
          sort_order: number | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name: string
          id?: string
          is_active?: boolean | null
          service_key: string
          sort_order?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean | null
          service_key?: string
          sort_order?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          favicon_url: string | null
          id: number
          logo_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          favicon_url?: string | null
          id?: number
          logo_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          favicon_url?: string | null
          id?: number
          logo_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          bio: string | null
          created_at: string
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          role: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          role: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          role?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          content: string
          created_at: string
          id: string
          is_active: boolean | null
          name: string
          rating: number | null
          role: string | null
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          content: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          name: string
          rating?: number | null
          role?: string | null
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          content?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          name?: string
          rating?: number | null
          role?: string | null
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      workflow_steps: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          items: string[]
          sort_order: number
          step_number: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name: string
          id?: string
          is_active?: boolean
          items?: string[]
          sort_order?: number
          step_number: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          items?: string[]
          sort_order?: number
          step_number?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_analytics_summary: {
        Args: { end_ts: string; start_ts: string }
        Returns: {
          average_session_duration: number
          bounce_rate: number
          pages_per_session: number
          total_pageviews: number
          total_visitors: number
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never> | { _user_id?: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
