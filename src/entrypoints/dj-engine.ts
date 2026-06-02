/* =============================================================
   大井绩效 — claude-code-build 库入口（headless 引擎）
   把 QueryEngine / query() / Tool 基建 re-export 给 conversation
   服务消费。经 build.ts 的 Bun 管线构建（stub 解析反编译缺口）
   → dist/dj-engine.js（Node 可导入）。
   ============================================================= */
import { QueryEngine } from "../QueryEngine.js";
import { query } from "../query.js";

export { QueryEngine, query };
export type { QueryEngineConfig } from "../QueryEngine.js";
export * as ToolMod from "../Tool.js";

// 自检：DJ_ENGINE_SELFCHECK=1 node dist/dj-engine.js → 证明导入/实例化在 Node 下成立
export function __selfcheck(): void {
  console.log("[dj-engine] QueryEngine:", typeof QueryEngine, "· query:", typeof query);
}

if (process.env.DJ_ENGINE_SELFCHECK) __selfcheck();
