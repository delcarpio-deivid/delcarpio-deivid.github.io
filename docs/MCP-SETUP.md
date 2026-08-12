# Guía MCP — Engram + pen.dev (Pencil)

Este repo declara ambos servidores en [`.cursor/mcp.json`](../.cursor/mcp.json).

| MCP | Dónde funciona | Notas |
|-----|----------------|-------|
| **Engram** | Cursor IDE (PC) + Cloud Agents (si lo habilitas en el dashboard) | Memoria persistente entre sesiones |
| **Pencil / pen.dev** | **Solo Cursor IDE en tu PC** | El MCP es local; no corre en Cloud Agents |

---

## 1. Engram en tu PC (Windows)

### Instalar el binario

1. Descarga `engram_*_windows_amd64.zip` desde [Releases](https://github.com/Gentleman-Programming/engram/releases).
2. Extrae `engram.exe` a una carpeta en tu PATH, por ejemplo `%USERPROFILE%\bin`.
3. Añade esa carpeta al PATH de usuario (PowerShell una vez):

```powershell
[Environment]::SetEnvironmentVariable(
  "Path",
  "$env:USERPROFILE\bin;" + [Environment]::GetEnvironmentVariable("Path", "User"),
  "User"
)
```

4. Abre una terminal nueva y verifica:

```powershell
engram version
```

### Conectar en Cursor

1. Asegúrate de que el repo tenga `.cursor/mcp.json` (ya incluye `engram`).
2. Reinicia Cursor (o **Developer: Reload Window**).
3. Ve a **Settings → Tools & MCP** y confirma que `engram` aparece en verde.
4. (Recomendado) Copia el protocolo de memoria a **Settings → Rules → User Rules**, o deja que aplique la rule del proyecto [`.cursor/rules/engram.mdc`](../.cursor/rules/engram.mdc).

Atajo opcional:

```powershell
engram setup cursor
```

---

## 2. pen.dev (Pencil) en tu PC

Pencil **solo** funciona en tu máquina: el servidor MCP abre y edita archivos `.pen` locales.

1. En Cursor: **Extensions → busca `pen.dev` → Install**.
2. Completa la activación / login que pida la extensión.
3. Abre o crea un archivo `.pen` en el proyecto.
4. **Settings → Tools & MCP**: debe aparecer `pencil` conectado.
5. Si no aparece, deja el bloque `pencil` de `.cursor/mcp.json` (ruta Windows ya configurada) y reinicia Cursor con Pencil/la extensión activos.

Prompt de diseño listo: [`04-PROMPT-PENDEV.md`](../04-PROMPT-PENDEV.md).

> Cloud Agents **no** pueden usar Pencil: no hay `.exe` de Windows ni UI de Pencil en la VM remota. Diseña en tu PC; luego exporta tokens a `src/styles/tokens.css`.

---

## 3. Engram en Cloud Agents (cursor.com/agents)

El archivo `.cursor/mcp.json` del repo **no basta** para Cloud Agents. Hay que registrar el MCP en el dashboard:

1. Abre [cursor.com/agents](https://cursor.com/agents).
2. En el dropdown de **MCP**, añade un servidor custom **stdio**:
   - **Name:** `engram`
   - **Command:** `engram` (o la ruta absoluta si lo instalas en el environment)
   - **Args:** `mcp` `--tools=agent`
3. En planes Team: **Dashboard → Integrations & MCP** para compartirlo.
4. Para que el binario exista en la VM, configura el environment `install` para descargar Engram Linux (amd64), por ejemplo:

```bash
curl -fsSL -o /tmp/engram.tgz \
  https://github.com/Gentleman-Programming/engram/releases/download/v1.20.0/engram_1.20.0_linux_amd64.tar.gz
tar -xzf /tmp/engram.tgz -C /tmp
sudo install -m 755 /tmp/engram /usr/local/bin/engram
```

5. Lanza un Cloud Agent nuevo y verifica que las tools `mem_*` estén disponibles.

Pencil **no** se registra en Cloud Agents (local-only).

---

## 4. Checklist rápido

- [ ] `engram version` funciona en PowerShell
- [ ] Cursor → Tools & MCP → `engram` OK
- [ ] Extensión pen.dev instalada + `pencil` OK
- [ ] (Opcional) Engram añadido en cursor.com/agents para Cloud
- [ ] Reiniciar Cursor después de cambiar MCP
