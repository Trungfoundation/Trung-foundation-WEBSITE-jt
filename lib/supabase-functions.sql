-- Create a function to get recent submissions from all tables
CREATE OR REPLACE FUNCTION public.get_recent_submissions(limit_count integer)
RETURNS TABLE (
    id uuid,
    type text,
    name text,
    email text,
    created_at timestamptz,
    status text
) LANGUAGE sql AS $$
    (SELECT 
        id,
        'Contact' as type,
        name,
        email,
        created_at,
        status
    FROM 
        public.contact_submissions
    ORDER BY 
        created_at DESC
    LIMIT limit_count)
    
    UNION ALL
    
    (SELECT 
        id,
        'Newsletter' as type,
        'Subscriber' as name,
        email,
        created_at,
        status
    FROM 
        public.newsletter_subscribers
    ORDER BY 
        created_at DESC
    LIMIT limit_count)
    
    UNION ALL
    
    (SELECT 
        id,
        'Event' as type,
        name,
        email,
        created_at,
        status
    FROM 
        public.event_registrations
    ORDER BY 
        created_at DESC
    LIMIT limit_count)
    
    UNION ALL
    
    (SELECT 
        id,
        'Volunteer' as type,
        name,
        email,
        created_at,
        status
    FROM 
        public.volunteer_applications
    ORDER BY 
        created_at DESC
    LIMIT limit_count)
    
    UNION ALL
    
    (SELECT 
        d.id,
        'Donation' as type,
        COALESCE(dr.name, 'Anonymous') as name,
        dr.email,
        d.created_at,
        d.payment_status as status
    FROM 
        public.donations d
    JOIN
        public.donors dr ON d.donor_id = dr.id
    ORDER BY 
        d.created_at DESC
    LIMIT limit_count)
    
    ORDER BY created_at DESC
    LIMIT limit_count;
$$;
