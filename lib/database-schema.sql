-- This file contains the SQL schema for the Supabase database
-- You can run these commands in the Supabase SQL editor to set up your database

-- Create tables for the foundation website

-- Newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'subscribed',
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Contact form submissions
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new'
);

-- Event registrations
CREATE TABLE public.event_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    event_title TEXT NOT NULL,
    event_date TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'registered'
);

-- Volunteer applications
CREATE TABLE public.volunteer_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    skills TEXT,
    availability TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending'
);

-- Donors
CREATE TABLE public.donors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    address TEXT,
    is_anonymous BOOLEAN DEFAULT FALSE,
    total_donated NUMERIC DEFAULT 0,
    last_donation_date TIMESTAMP WITH TIME ZONE
);

-- Donations
CREATE TABLE public.donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    donor_id UUID REFERENCES public.donors(id),
    amount NUMERIC NOT NULL,
    program TEXT,
    message TEXT,
    payment_method TEXT NOT NULL,
    payment_status TEXT NOT NULL DEFAULT 'pending',
    transaction_id TEXT
);

-- Admin users
CREATE TABLE public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'admin',
    last_sign_in TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_contact_email ON public.contact_submissions(email);
CREATE INDEX idx_event_email ON public.event_registrations(email);
CREATE INDEX idx_volunteer_email ON public.volunteer_applications(email);
CREATE INDEX idx_donor_email ON public.donors(email);
CREATE INDEX idx_donation_donor ON public.donations(donor_id);
CREATE INDEX idx_admin_email ON public.admin_users(email);

-- Create Row Level Security (RLS) policies
-- Enable RLS on all tables
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admin only)
CREATE POLICY "Allow full access for authenticated users" ON public.newsletter_subscribers
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.contact_submissions
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.event_registrations
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.volunteer_applications
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.donors
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.donations
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow full access for authenticated users" ON public.admin_users
    FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for anonymous users (insert only for form submissions)
CREATE POLICY "Allow anonymous inserts" ON public.newsletter_subscribers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON public.event_registrations
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON public.volunteer_applications
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON public.donors
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON public.donations
    FOR INSERT WITH CHECK (true);

-- Insert a default admin user (change the email and password in production)
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, role)
VALUES (
    uuid_generate_v4(),
    'admin@trungfoundation.org',
    crypt('admin123', gen_salt('bf')),
    NOW(),
    'authenticated'
);

-- Get the user ID of the admin user
DO $$
DECLARE
    admin_user_id UUID;
BEGIN
    SELECT id INTO admin_user_id FROM auth.users WHERE email = 'admin@trungfoundation.org';
    
    INSERT INTO public.admin_users (id, email, role)
    VALUES (admin_user_id, 'admin@trungfoundation.org', 'super_admin');
END $$;
