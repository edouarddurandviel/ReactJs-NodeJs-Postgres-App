--
-- PostgreSQL database dump
--

\restrict Jj4EmI2FBKhrAraK9kHT9hpc4NExskX8NpD5DJ4SCssXv39c1A1PPDw2sDRP9Hd

-- Dumped from database version 16.13 (Debian 16.13-1.pgdg13+1)
-- Dumped by pg_dump version 16.14

-- Started on 2026-05-20 16:29:32

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
-- TOC entry 221 (class 1259 OID 16413)
-- Name: Companies; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Companies" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    activity character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Companies" OWNER TO dbuser;

--
-- TOC entry 220 (class 1259 OID 16412)
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
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 220
-- Name: Companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Companies_id_seq" OWNED BY public."Companies".id;


--
-- TOC entry 223 (class 1259 OID 16422)
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
-- TOC entry 222 (class 1259 OID 16421)
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
-- TOC entry 3460 (class 0 OID 0)
-- Dependencies: 222
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."CompanyAddresses_id_seq" OWNED BY public."CompanyAddresses".id;


--
-- TOC entry 215 (class 1259 OID 16389)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO dbuser;

--
-- TOC entry 219 (class 1259 OID 16404)
-- Name: Tokens; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Tokens" (
    id integer NOT NULL,
    token character varying(255),
    "User_Id" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tokens" OWNER TO dbuser;

--
-- TOC entry 218 (class 1259 OID 16403)
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
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 218
-- Name: Tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Tokens_id_seq" OWNED BY public."Tokens".id;


--
-- TOC entry 217 (class 1259 OID 16395)
-- Name: Users; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    salt character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO dbuser;

--
-- TOC entry 216 (class 1259 OID 16394)
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
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 216
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 3288 (class 2604 OID 16416)
-- Name: Companies id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies" ALTER COLUMN id SET DEFAULT nextval('public."Companies_id_seq"'::regclass);


--
-- TOC entry 3289 (class 2604 OID 16425)
-- Name: CompanyAddresses id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses" ALTER COLUMN id SET DEFAULT nextval('public."CompanyAddresses_id_seq"'::regclass);


--
-- TOC entry 3287 (class 2604 OID 16407)
-- Name: Tokens id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens" ALTER COLUMN id SET DEFAULT nextval('public."Tokens_id_seq"'::regclass);


--
-- TOC entry 3286 (class 2604 OID 16398)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 3451 (class 0 OID 16413)
-- Dependencies: 221
-- Data for Name: Companies; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Companies" (id, name, activity, owner, "createdAt", "updatedAt") FROM stdin;
1	nike	sport	owner	2026-05-18 17:25:58.45528+00	2026-05-18 17:25:58.45528+00
2	adidas	sport	owner	2026-05-18 17:26:24.986949+00	2026-05-18 17:26:24.986949+00
\.


--
-- TOC entry 3453 (class 0 OID 16422)
-- Dependencies: 223
-- Data for Name: CompanyAddresses; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."CompanyAddresses" (id, "Company_Id", street, "createdAt", "updatedAt", postcode, city) FROM stdin;
1	1	street	2026-05-18 17:26:48.263264+00	2026-05-18 17:26:48.263264+00	6600	city
2	2	street	2026-05-18 17:27:16.036818+00	2026-05-18 17:27:16.036818+00	6600	city
\.


--
-- TOC entry 3445 (class 0 OID 16389)
-- Dependencies: 215
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."SequelizeMeta" (name) FROM stdin;
20260511074058-create-user.js
20260511155246-create-token.js
20260511184003-create-company.js
20260511184121-create-company-address.js
\.


--
-- TOC entry 3449 (class 0 OID 16404)
-- Dependencies: 219
-- Data for Name: Tokens; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Tokens" (id, token, "User_Id", "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3447 (class 0 OID 16395)
-- Dependencies: 217
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public."Users" (id, email, password, salt, "createdAt", "updatedAt") FROM stdin;
1	hash3@test.com	3bd883b191816eb909f6bd11fc81ab9af205c4a72c1c78cd00d08af6607ae22e	b1a2c8dbf30250c10724f882fa269b90	2026-05-18 17:28:53.366+00	2026-05-18 17:28:53.366+00
2	hash3@mail.com	62a99c443b72e9ad56c06796eaafdf90e4fa0c5993b3d544ea1957e8b2302967	f86a5d7283d17a3a046676af3c65b3af	2026-05-18 17:29:36.058+00	2026-05-18 17:29:36.058+00
\.


--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 220
-- Name: Companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Companies_id_seq"', 2, true);


--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 222
-- Name: CompanyAddresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."CompanyAddresses_id_seq"', 2, true);


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 218
-- Name: Tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Tokens_id_seq"', 7, true);


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 216
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- TOC entry 3299 (class 2606 OID 16420)
-- Name: Companies Companies_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (id);


--
-- TOC entry 3301 (class 2606 OID 16427)
-- Name: CompanyAddresses CompanyAddresses_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."CompanyAddresses"
    ADD CONSTRAINT "CompanyAddresses_pkey" PRIMARY KEY (id);


--
-- TOC entry 3291 (class 2606 OID 16393)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 3295 (class 2606 OID 16411)
-- Name: Tokens Tokens_User_Id_key; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_User_Id_key" UNIQUE ("User_Id");


--
-- TOC entry 3297 (class 2606 OID 16409)
-- Name: Tokens Tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Tokens"
    ADD CONSTRAINT "Tokens_pkey" PRIMARY KEY (id);


--
-- TOC entry 3293 (class 2606 OID 16402)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


-- Completed on 2026-05-20 16:29:33

--
-- PostgreSQL database dump complete
--

\unrestrict Jj4EmI2FBKhrAraK9kHT9hpc4NExskX8NpD5DJ4SCssXv39c1A1PPDw2sDRP9Hd

