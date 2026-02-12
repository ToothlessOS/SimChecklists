import type { ReactNode } from "react";
import {
  FiEdit3,
  FiRotateCcw,
  FiRotateCw,
  FiX,
  FiXCircle,
  FiTrash,
  FiSave,
} from "react-icons/fi";
import { FaEraser, FaPen } from "react-icons/fa";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { useRef, useState, useEffect } from "react";

function SketchPad(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#000000");

  // Load canvas from localStorage when overlay opens
  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const savedCanvas = localStorage.getItem("sketchpad-canvas");
      if (savedCanvas) {
        try {
          canvasRef.current.loadPaths(JSON.parse(savedCanvas));
        } catch (error) {
          console.error("Failed to load saved canvas:", error);
        }
      }
    }
  }, [isOpen]);

  // Save canvas to localStorage
  const saveCanvas = async () => {
    try {
      const paths = await canvasRef.current?.exportPaths();
      if (paths) {
        localStorage.setItem("sketchpad-canvas", JSON.stringify(paths));
      }
    } catch (error) {
      console.error("Failed to save canvas:", error);
    }
  };

  // Close and save
  const handleClose = async () => {
    await saveCanvas();
    setIsOpen(false);
  };

  const toggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = async () => {
    canvasRef.current?.undo();
    await saveCanvas();
  };

  const handleRedoClick = async () => {
    canvasRef.current?.redo();
    await saveCanvas();
  };

  const handleClearClick = async () => {
    canvasRef.current?.clearCanvas();
    await saveCanvas();
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
    localStorage.removeItem("sketchpad-canvas");
  };

  const handleExportClick = async () => {
    const image = await canvasRef.current?.exportImage("png");
    if (!image) return;

    const link = document.createElement("a");
    link.href = image;
    link.download = "canvas.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleColorChange = (code: string) => {
    setStrokeColor(code);
  };

  return (
    <>
      <div
        className={`sketchpad-backdrop ${isOpen ? "sketchpad-backdrop-open" : ""}`}
        onClick={handleClose}
      />

      {isOpen && (
        <div className="sketchpad-canvas-overlay">
          <div className="sketchpad-canvas-header">
            <h2>Sketch Pad</h2>
            <button className="sketchpad-canvas-close" onClick={handleClose}>
              <FiX />
            </button>
          </div>

          <div className="sketchpad-toolbar">
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              disabled={!eraseMode}
              onClick={handlePenClick}
            >
              <FaPen />
            </button>
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              disabled={eraseMode}
              onClick={handleEraserClick}
            >
              <FaEraser />
            </button>

            <div className="sketchpad-divider" />

            <button
              type="button"
              className="sketchpad-toolbar-btn sketchpad-color-black"
              onClick={() => handleColorChange("#000000")}
            ></button>
            <button
              type="button"
              className="sketchpad-toolbar-btn sketchpad-color-blue"
              onClick={() => handleColorChange("#0000FF")}
            ></button>
            <button
              type="button"
              className="sketchpad-toolbar-btn sketchpad-color-red"
              onClick={() => handleColorChange("#FF0000")}
            ></button>

            <div className="sketchpad-divider" />

            <button
              type="button"
              className="sketchpad-toolbar-btn"
              onClick={handleUndoClick}
            >
              <FiRotateCcw />
            </button>
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              onClick={handleRedoClick}
            >
              <FiRotateCw />
            </button>
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              onClick={handleClearClick}
            >
              <FiTrash />
            </button>
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              onClick={handleResetClick}
            >
              <FiXCircle />
            </button>
            <button
              type="button"
              className="sketchpad-toolbar-btn"
              onClick={handleExportClick}
            >
              <FiSave />
            </button>
          </div>

          <div className="sketchpad-canvas-body">
            <ReactSketchCanvas
              ref={canvasRef}
              strokeColor={strokeColor}
              strokeWidth={4}
              width="100%"
              height="100%"
              canvasColor="transparent"
            />
          </div>
        </div>
      )}

      <div className="sketchpad-container">
        <button className="sketchpad-main" onClick={toggle}>
          {isOpen ? <FiX /> : <FiEdit3 />}
        </button>
      </div>
    </>
  );
}

export default SketchPad;
