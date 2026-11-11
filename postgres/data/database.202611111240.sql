--
-- PostgreSQL database cluster dump
--

-- Started on 2026-11-11 12:40:40

\restrict rue4tyEBZ5fV8N4erNz0PbZaEu0AOpyQxGDKrL2eKCtekya7TRVnj6TAIYJPnYv

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE dbuser;
ALTER ROLE dbuser WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:J8j1s/nIfuSIIO6APOuSIg==$8aohIzkr9JSli9ODz3NJet/jy5oJyuMI/ZlQ1KREuds=:GjDQJJCT/t8zMCBHTJLR8bBqMHvfD7i4LTXd8CzTQVY=';

--
-- User Configurations
--








\unrestrict rue4tyEBZ5fV8N4erNz0PbZaEu0AOpyQxGDKrL2eKCtekya7TRVnj6TAIYJPnYv

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict uAuGGr5T3bDdzhJ7YYb0diP4ikfvjT4KdaKcJh78wGun2tuDKhrY63thAREHcZ0

-- Dumped from database version 16.15 (Debian 16.15-1.pgdg13+2)
-- Dumped by pg_dump version 16.14

-- Started on 2026-11-11 12:40:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2026-11-11 12:40:40

--
-- PostgreSQL database dump complete
--

\unrestrict uAuGGr5T3bDdzhJ7YYb0diP4ikfvjT4KdaKcJh78wGun2tuDKhrY63thAREHcZ0

--
-- Database "mydatabase" dump
--

--
-- PostgreSQL database dump
--

\restrict gNAwVuB8T79c2DUyciBZXrAP0AO1TejIsqjq8raifrZLwi50sGCQOLQM9rmGmGh

-- Dumped from database version 16.15 (Debian 16.15-1.pgdg13+2)
-- Dumped by pg_dump version 16.14

-- Started on 2026-11-11 12:40:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3492 (class 1262 OID 16384)
-- Name: mydatabase; Type: DATABASE; Schema: -; Owner: dbuser
--

CREATE DATABASE mydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE mydatabase OWNER TO dbuser;

\unrestrict gNAwVuB8T79c2DUyciBZXrAP0AO1TejIsqjq8raifrZLwi50sGCQOLQM9rmGmGh
\connect mydatabase
\restrict gNAwVuB8T79c2DUyciBZXrAP0AO1TejIsqjq8raifrZLwi50sGCQOLQM9rmGmGh

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16385)
-- Name: Companies; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Companies" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    activity character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    imgpath character varying
);


ALTER TABLE public."Companies" OWNER TO dbuser;

--
-- TOC entry 216 (class 1259 OID 16390)
-- Name: Companies_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Companies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Companies_id_seq" OWNER TO dbuser;

--
-- TOC entry 3493 (class 0 OID 0)
-- Dependencies: 216
-- Name: Companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Companies_id_seq" OWNED BY public."Companies".id;


--
-- TOC entry 217 (class 1259 OID 16391)
-- Name: CompanyAddresses; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."CompanyAddresses" (
    id integer NOT NULL,
    "Company_Id" integer NOT NULL,
    street character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    postcode integer,
    city character varying
);


ALTER TABLE public."CompanyAddresses" OWNER TO dbuser;

--
-- TOC entry 218 (class 1259 OID 16396)
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."CompanyAddresses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CompanyAddresses_id_seq" OWNER TO dbuser;

--
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 218
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."CompanyAddresses_id_seq" OWNED BY public."CompanyAddresses".id;


--
-- TOC entry 227 (class 1259 OID 16456)
-- Name: Rights; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Rights" (
    id bigint NOT NULL,
    content jsonb NOT NULL,
    "createdAt" timestamp(6) without time zone NOT NULL,
    "updatedAt" timestamp(6) without time zone NOT NULL,
    "User_Id" bigint NOT NULL
);


ALTER TABLE public."Rights" OWNER TO dbuser;

--
-- TOC entry 226 (class 1259 OID 16455)
-- Name: Rights_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

ALTER TABLE public."Rights" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Rights_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16397)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO dbuser;

--
-- TOC entry 220 (class 1259 OID 16400)
-- Name: Tokens; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Tokens" (
    id bigint NOT NULL,
    token character varying(255),
    "User_Id" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tokens" OWNER TO dbuser;

--
-- TOC entry 221 (class 1259 OID 16403)
-- Name: Tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Tokens_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tokens_id_seq" OWNER TO dbuser;

--
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 221
-- Name: Tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Tokens_id_seq" OWNED BY public."Tokens".id;


--
-- TOC entry 222 (class 1259 OID 16404)
-- Name: Users; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Users" (
    id bigint NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    salt character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO dbuser;

--
-- TOC entry 223 (class 1259 OID 16409)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO dbuser;

--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 223
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 224 (class 1259 OID 16435)
-- Name: spring_session; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.spring_session (
    primary_id character(36) NOT NULL,
    session_id character(36) NOT NULL,
    creation_time bigint NOT NULL,
    last_access_time bigint NOT NULL,
    max_inactive_interval integer NOT NULL,
    expiry_time bigint NOT NULL,
    principal_name character varying(100)
);


ALTER TABLE public.spring_session OWNER TO dbuser;

--
-- TOC entry 225 (class 1259 OID 16443)
-- Name: spring_session_attributes; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.spring_session_attributes (
    session_primary_id character(36) NOT NULL,
    attribute_name character varying(200) NOT NULL,
    attribute_bytes bytea NOT NULL
);


ALTER TABLE public.spring_session_attributes OWNER TO dbuser;

--
-- TOC entry 3299 (class 2604 OID 16410)
-- Name: Companies id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies" ALTER COLUMN id SET DEFAULT nextval('public."Companies_id_seq"'::regclass);


--
-- TOC entry 3300 (class 2604 OID 16411)
-- Name: CompanyAddresses id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses" ALTER COLUMN id SET DEFAULT nextval('public."CompanyAddresses_id_seq"'::regclass);


--
-- TOC entry 3301 (class 2604 OID 16463)
-- Name: Tokens id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens" ALTER COLUMN id SET DEFAULT nextval('public."Tokens_id_seq"'::regclass);


--
-- TOC entry 3302 (class 2604 OID 16471)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 3474 (class 0 OID 16385)
-- Dependencies: 215
-- Data for Name: Companies; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Companies" (id, name, activity, owner, "createdAt", "updatedAt", imgpath) FROM stdin;
5	asycs	running	asycs	2026-05-22 08:52:08.476+00	2026-06-18 13:16:11.095+00	300x200/image-1781720549877-259532396-300x200.jpeg
1	adidas	football	adidas	2026-05-21 08:43:41.475+00	2026-06-18 13:16:20.403+00	300x200/image-1781719403485-170517145-300x200.jpeg
6	puma	football	puma	2026-06-13 10:33:03.422+00	2026-06-18 13:16:46.386+00	300x200/image-1781713799501-966738190-300x200.jpeg
7	nike	sport	nike	2026-06-13 11:05:55.874+00	2026-06-18 13:16:59.492+00	300x200/image-1781721689039-16606833-300x200.jpeg
\.


--
-- TOC entry 3476 (class 0 OID 16391)
-- Dependencies: 217
-- Data for Name: CompanyAddresses; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."CompanyAddresses" (id, "Company_Id", street, "createdAt", "updatedAt", postcode, city) FROM stdin;
3	1	464 Chem. du Petit Four	2026-05-21 09:03:27.557+00	2026-05-21 09:03:27.557+00	6600	Antibes
4	1	500 Chem. du Petit Four	2026-05-21 09:03:37.43+00	2026-05-21 09:03:37.43+00	6600	Antibes
7	5	600 Chem. du Petit Four	2026-05-22 08:52:18.669+00	2026-05-22 08:52:18.669+00	6600	Antibes
14	5	464 Chem. du Petit Four	2026-06-12 14:57:05.913+00	2026-06-12 14:57:05.913+00	6600	Antibes
15	6	464 Chem. du Petit Four	2026-06-13 10:42:27.667+00	2026-06-13 10:42:27.667+00	6600	Antibes
16	7	464 Chem. du Petit Four	2026-06-13 11:06:01.564+00	2026-06-13 11:06:01.564+00	6600	Antibes
\.


--
-- TOC entry 3486 (class 0 OID 16456)
-- Dependencies: 227
-- Data for Name: Rights; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Rights" (id, content, "createdAt", "updatedAt", "User_Id") FROM stdin;
1	{"profil": {"read": true, "write": true}, "tanstack": {"read": true, "write": true}, "createUser": {"read": true, "write": true}}	2026-11-11 11:58:22.32848	2026-11-11 11:58:22.32848	2
\.


--
-- TOC entry 3478 (class 0 OID 16397)
-- Dependencies: 219
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."SequelizeMeta" (name) FROM stdin;
20260511074058-create-user.js
20260511155246-create-token.js
20260511184003-create-company.js
20260511184121-create-company-address.js
\.


--
-- TOC entry 3479 (class 0 OID 16400)
-- Dependencies: 220
-- Data for Name: Tokens; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Tokens" (id, token, "User_Id", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3481 (class 0 OID 16404)
-- Dependencies: 222
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Users" (id, email, password, salt, "createdAt", "updatedAt") FROM stdin;
1	hash3@test.com	3bd883b191816eb909f6bd11fc81ab9af205c4a72c1c78cd00d08af6607ae22e	b1a2c8dbf30250c10724f882fa269b90	2026-05-18 17:28:53.366+00	2026-05-18 17:28:53.366+00
2	hash3@mail.com	62a99c443b72e9ad56c06796eaafdf90e4fa0c5993b3d544ea1957e8b2302967	f86a5d7283d17a3a046676af3c65b3af	2026-05-18 17:29:36.058+00	2026-05-18 17:29:36.058+00
3	hash4@mail.com	$argon2id$v=19$m=16384,t=2,p=1$aAUZtiS7IuKZ+x99Cw+imw$QcnWOeWq7oBf9dKW2qQhnjt1Dm9EYxjP/CAMs4azIB0	8f48cc9a2fa8b403258075bb66b818b0	2026-11-08 17:46:36.13215+00	2026-11-08 17:46:36.13215+00
\.


--
-- TOC entry 3483 (class 0 OID 16435)
-- Dependencies: 224
-- Data for Name: spring_session; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public.spring_session (primary_id, session_id, creation_time, last_access_time, max_inactive_interval, expiry_time, principal_name) FROM stdin;
\.


--
-- TOC entry 3484 (class 0 OID 16443)
-- Dependencies: 225
-- Data for Name: spring_session_attributes; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public.spring_session_attributes (session_primary_id, attribute_name, attribute_bytes) FROM stdin;
\.


--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 216
-- Name: Companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Companies_id_seq"', 8, true);


--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 218
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."CompanyAddresses_id_seq"', 17, true);


--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 226
-- Name: Rights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Rights_id_seq"', 1, false);


--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 221
-- Name: Tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Tokens_id_seq"', 103, true);


--
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 223
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);


--
-- TOC entry 3304 (class 2606 OID 16415)
-- Name: Companies Companies_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (id);


--
-- TOC entry 3306 (class 2606 OID 16417)
-- Name: CompanyAddresses CompanyAddresses_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses"
    ADD CONSTRAINT "CompanyAddresses_pkey" PRIMARY KEY (id);


--
-- TOC entry 3323 (class 2606 OID 16462)
-- Name: Rights Rights_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Rights"
    ADD CONSTRAINT "Rights_pkey" PRIMARY KEY (id);


--
-- TOC entry 3308 (class 2606 OID 16419)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 3310 (class 2606 OID 16421)
-- Name: Tokens Tokens_User_Id_key; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_User_Id_key" UNIQUE ("User_Id");


--
-- TOC entry 3312 (class 2606 OID 16465)
-- Name: Tokens Tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_pkey" PRIMARY KEY (id);


--
-- TOC entry 3314 (class 2606 OID 16473)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 3321 (class 2606 OID 16449)
-- Name: spring_session_attributes spring_session_attributes_pk; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.spring_session_attributes
    ADD CONSTRAINT spring_session_attributes_pk PRIMARY KEY (session_primary_id, attribute_name);


--
-- TOC entry 3319 (class 2606 OID 16439)
-- Name: spring_session spring_session_pk; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.spring_session
    ADD CONSTRAINT spring_session_pk PRIMARY KEY (primary_id);


--
-- TOC entry 3325 (class 2606 OID 16481)
-- Name: Rights uk3dd72rqx04elvhp1xt6hxnsnu; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Rights"
    ADD CONSTRAINT uk3dd72rqx04elvhp1xt6hxnsnu UNIQUE (content);


--
-- TOC entry 3327 (class 2606 OID 16483)
-- Name: Rights ukbk1ueo5ko7w8nm07gcxy07xke; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Rights"
    ADD CONSTRAINT ukbk1ueo5ko7w8nm07gcxy07xke UNIQUE ("User_Id");


--
-- TOC entry 3315 (class 1259 OID 16440)
-- Name: spring_session_ix1; Type: INDEX; Schema: public; Owner: dbuser
--

CREATE UNIQUE INDEX spring_session_ix1 ON public.spring_session USING btree (session_id);


--
-- TOC entry 3316 (class 1259 OID 16441)
-- Name: spring_session_ix2; Type: INDEX; Schema: public; Owner: dbuser
--

CREATE INDEX spring_session_ix2 ON public.spring_session USING btree (expiry_time);


--
-- TOC entry 3317 (class 1259 OID 16442)
-- Name: spring_session_ix3; Type: INDEX; Schema: public; Owner: dbuser
--

CREATE INDEX spring_session_ix3 ON public.spring_session USING btree (principal_name);


--
-- TOC entry 3328 (class 2606 OID 16426)
-- Name: CompanyAddresses CompanyAddresses_Company_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses"
    ADD CONSTRAINT "CompanyAddresses_Company_Id_fkey" FOREIGN KEY ("Company_Id") REFERENCES public."Companies"(id) ON DELETE CASCADE;


--
-- TOC entry 3330 (class 2606 OID 16484)
-- Name: Rights fk7ejgn9leaux66nsb4romnt9yy; Type: FK CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Rights"
    ADD CONSTRAINT fk7ejgn9leaux66nsb4romnt9yy FOREIGN KEY ("User_Id") REFERENCES public."Users"(id);


--
-- TOC entry 3329 (class 2606 OID 16450)
-- Name: spring_session_attributes spring_session_attributes_fk; Type: FK CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.spring_session_attributes
    ADD CONSTRAINT spring_session_attributes_fk FOREIGN KEY (session_primary_id) REFERENCES public.spring_session(primary_id) ON DELETE CASCADE;


-- Completed on 2026-11-11 12:40:41

--
-- PostgreSQL database dump complete
--

\unrestrict gNAwVuB8T79c2DUyciBZXrAP0AO1TejIsqjq8raifrZLwi50sGCQOLQM9rmGmGh

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict 2Kg6RgtGgTQtDgC2YQKoLugxyElEgoWaepRnzU8pOtgQbrpsQUg61QJoc22Ck6v

-- Dumped from database version 16.15 (Debian 16.15-1.pgdg13+2)
-- Dumped by pg_dump version 16.14

-- Started on 2026-11-11 12:40:41

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2026-11-11 12:40:41

--
-- PostgreSQL database dump complete
--

\unrestrict 2Kg6RgtGgTQtDgC2YQKoLugxyElEgoWaepRnzU8pOtgQbrpsQUg61QJoc22Ck6v

-- Completed on 2026-11-11 12:40:41

--
-- PostgreSQL database cluster dump complete
--

